import { ProviderUserEntity } from '@/domain/entities'

export interface FindProviderUserByIdRepository {
  findProviderUserById: (data: FindProviderUserByIdRepositoryParams) => Promise<FindProviderUserByIdRepositoryResult>
}

export type FindProviderUserByIdRepositoryParams = { providerUserId: string }

export type FindProviderUserByIdRepositoryResult = ProviderUserEntity | Error
