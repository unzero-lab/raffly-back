import { ProviderUserEntity } from '@/domain/entities'
import { RegisterProviderUserUseCaseParams } from '@/domain/usecases'

export interface CreateProviderUserRepository {
  insertProviderUser: (data: CreateProviderUserRepositoryParams) => Promise<CreateProviderUserRepositoryResult>
}

export type CreateProviderUserRepositoryParams = RegisterProviderUserUseCaseParams

export type CreateProviderUserRepositoryResult = ProviderUserEntity | Error
