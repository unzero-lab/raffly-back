import {
  CreateProviderUserRepository,
  FindProviderUserByEmailRepository
} from '@/application/contracts/repositories/provider-user'
import { CriptographPasswordTask } from '@/application/contracts/tasks/auth'
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
    private readonly providerUserRepository: CreateProviderUserRepository & FindProviderUserByEmailRepository,
    @Inject('CriptographPasswordTask') private readonly criptographTask: CriptographPasswordTask
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

    if (!createdProviderUser) {
      return new CreateProviderUserError()
    }

    return createdProviderUser
  }
}
