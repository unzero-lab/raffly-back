import { ProviderUserEntity } from '@/domain/entities'

export interface LoadProviderUserUseCase {
  execute(params: LoadProviderUserUseCaseParams): Promise<LoadProviderUserUseCaseResult>
}

export type LoadProviderUserUseCaseParams = {
  id: string
}

export type LoadProviderUserUseCaseResult = ProviderUserEntity | Error
