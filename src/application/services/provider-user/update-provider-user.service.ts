import { UpdateProviderUserRepository } from '@/application/contracts/repositories/provider-user'
import {
  UpdateProviderUserUseCase,
  UpdateProviderUserUseCaseParams,
  UpdateProviderUserUseCaseResult
} from '@/domain/usecases/provider-user'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class UpdateProviderUserService implements UpdateProviderUserUseCase {
  constructor(
    @Inject('UpdateProviderUserRepository') private readonly providerUserRepository: UpdateProviderUserRepository
  ) {}

  public async execute(params: UpdateProviderUserUseCaseParams): Promise<UpdateProviderUserUseCaseResult> {
    const updatedProviderUser = await this.providerUserRepository.updateProviderUser(params)

    if (updatedProviderUser instanceof Error) {
      return updatedProviderUser
    }
    return updatedProviderUser
  }
}
