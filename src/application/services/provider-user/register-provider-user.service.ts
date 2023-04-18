import {
  CreateProviderUserRepository,
  FindProviderUserByEmailRepository,
  SaveTokenProviderUserRepository
} from '@/application/contracts/repositories/provider-user'
import { CriptographPasswordTask, GenerateTokenTask } from '@/application/contracts/tasks/auth'
import { AlreadyExistsError, CreateProviderUserError } from '@/domain/errors'
import {
  RegisterProviderUserUseCase,
  RegisterProviderUserUseCaseParams,
  RegisterProviderUserUseCaseResult
} from '@/domain/usecases/provider-user'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class RegisterProviderUserService implements RegisterProviderUserUseCase {
  constructor(
    @Inject('CreateProviderUserRepository')
    @Inject('FindProviderUserByEmailRepository')
    @Inject('SaveTokenProviderUserRepository')
    private readonly providerUserRepository: CreateProviderUserRepository &
      FindProviderUserByEmailRepository &
      SaveTokenProviderUserRepository,
    @Inject('CriptographPasswordTask') private readonly criptographTask: CriptographPasswordTask,
    @Inject('GenerateTokenTask') private readonly generateTokenTask: GenerateTokenTask
  ) {}

  public async execute(params: RegisterProviderUserUseCaseParams): Promise<RegisterProviderUserUseCaseResult> {
    const foundProviderUser = await this.providerUserRepository.findProviderUserByEmail({
      email: params.email
    })

    if (foundProviderUser) {
      return new AlreadyExistsError(params.email)
    }

    const criptographPassword = await this.criptographTask.save({ password: params.password })

    if (typeof criptographPassword === 'string') {
      params.password = criptographPassword
    } else {
      return new CreateProviderUserError()
    }

    const createdProviderUser = await this.providerUserRepository.insertProviderUser({
      ...params,
      password: criptographPassword
    })

    if (createdProviderUser instanceof Error) {
      return new CreateProviderUserError()
    }

    const token = await this.generateTokenTask.generateToken({
      id: createdProviderUser.id,
      name: createdProviderUser.name,
      email: createdProviderUser.email
    })

    await this.providerUserRepository.saveToken({
      id: createdProviderUser.id,
      token
    })

    return createdProviderUser
  }
}
