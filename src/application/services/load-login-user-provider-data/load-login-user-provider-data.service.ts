import { FetchUserDataRepository } from '@/application/contracts/repositories/load-login-user-provider-data'
import {
  LoadLoginUserProviderDataUseCase,
  LoadLoginUserProviderDataUseCaseParams,
  LoadLoginUserProviderDataUseCaseResult
} from '@/domain/usecases'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class LoadLoginUserProviderDataService implements LoadLoginUserProviderDataUseCase {
  constructor(
    @Inject('FetchUserDataRepository') private readonly providerUserByIdRepository: FetchUserDataRepository
  ) {}

  public async execute(params: LoadLoginUserProviderDataUseCaseParams): Promise<LoadLoginUserProviderDataUseCaseResult> {
    const loadedData = await this.providerUserByIdRepository.findProviderUser(params)

    if (!loadedData) {
      return new Error('Error creating provider user')
    }

    return loadedData
  }
}
