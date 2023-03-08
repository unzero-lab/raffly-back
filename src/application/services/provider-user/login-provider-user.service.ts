import { GenerateTokenTask, ComparePasswordsTask } from '@/application/contracts/tasks/auth'
import {
  LoginProviderUserUseCase,
  LoginProviderUserUseCaseParams,
  LoginProviderUserUseCaseResult
} from '@/domain/usecases'
import {
  SaveTokenProviderUserRepository,
  FindProviderUserByEmailRepository
} from '@/application/contracts/repositories/provider-user'
import { Inject, Injectable } from '@nestjs/common'
import { InvalidEmailError, InvalidPasswordError } from '@/domain/errors'

@Injectable()
export class LoginProviderUserService implements LoginProviderUserUseCase {
  constructor(
    @Inject('SaveTokenProviderUserRepository')
    @Inject('FindProviderUserByEmailRepository')
    private readonly providerUserRepository: SaveTokenProviderUserRepository & FindProviderUserByEmailRepository,
    @Inject('GenerateTokenTask')
    private readonly authTask: GenerateTokenTask,
    @Inject('ComparePasswordsTask')
    private readonly criptographyTask: ComparePasswordsTask
  ) {}

  public async execute(params: LoginProviderUserUseCaseParams): Promise<LoginProviderUserUseCaseResult> {
    const providerUser = await this.providerUserRepository.findProviderUserByEmail({ email: params.email })

    if (!providerUser) {
      return new InvalidEmailError()
    }

    const isValidPassword = await this.criptographyTask.compare({
      plainText: params.password,
      hashedText: providerUser.password
    })

    if (!isValidPassword) {
      return new InvalidPasswordError()
    }

    const token = await this.authTask.generateToken({
      id: providerUser.id,
      name: providerUser.name,
      email: providerUser.email
    })

    await this.providerUserRepository.saveToken({
      id: providerUser.id,
      token
    })

    return { token }
  }
}
