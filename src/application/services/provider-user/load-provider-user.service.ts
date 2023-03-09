import { FindProviderUserByIdRepository } from '@/application/contracts/repositories/provider-user'
import { NotFoundError } from '@/domain/errors'
import {
  LoadProviderUserUseCase,
  LoadProviderUserUseCaseParams,
  LoadProviderUserUseCaseResult
} from '@/domain/usecases/provider-user'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class LoadProviderUserService implements LoadProviderUserUseCase {
  constructor(
    @Inject('FindProviderUserByIdRepository')
    private readonly providerUserRepository: FindProviderUserByIdRepository
  ) {}

  public async execute(params: LoadProviderUserUseCaseParams): Promise<LoadProviderUserUseCaseResult> {
    const loadedProviderUser = await this.providerUserRepository.findProviderUserById({ providerUserId: params.id })

    if (!loadedProviderUser) {
      return new NotFoundError('User')
    }

    return loadedProviderUser
  }
}
