import { CreateProviderUserRepository } from '@/application/contracts/repositories/provider-user'
import {
  RegisterProviderUserUseCase,
  RegisterProviderUserUseCaseParams,
  RegisterProviderUserUseCaseResult
} from '@/domain/usecases'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class RegisterProviderUserService implements RegisterProviderUserUseCase {
  constructor(
    @Inject('CreateProviderUserRepository') private readonly providerUserRepository: CreateProviderUserRepository
  ) {}

  public async execute(params: RegisterProviderUserUseCaseParams): Promise<RegisterProviderUserUseCaseResult> {
    const createdProviderUser = await this.providerUserRepository.insertProviderUser(params)

    if (!createdProviderUser) {
      return new Error('Error creating provider user')
    }

    return createdProviderUser
  }
}
