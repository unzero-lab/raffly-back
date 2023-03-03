import { ProviderUserEntity } from '@/domain/entities'

export interface FetchUserDataRepository {
  findProviderUser: (data: FetchUserDataRepositoryParams) => Promise<FetchUserDataRepositoryResult>
}

export type FetchUserDataRepositoryParams = { providerUserId: string }

export type FetchUserDataRepositoryResult = ProviderUserEntity | Error
