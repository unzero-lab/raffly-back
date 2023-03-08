import { ProviderUserEntity } from '@/domain/entities'

export interface FindProviderUserByEmailRepository {
  findProviderUserByEmail: (
    data: FindProviderUserByEmailRepositoryParams
  ) => Promise<FindProviderUserByEmailRepositoryResult>
}

export type FindProviderUserByEmailRepositoryParams = {
  email: string
}

export type FindProviderUserByEmailRepositoryResult = ProviderUserEntity | null
