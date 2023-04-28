import { ProviderUserEntity } from '@/domain/entities'
import { UpdateProviderUserUseCaseParams } from '@/domain/usecases/provider-user'

export interface UpdateProviderUserRepository {
  updateProviderUser: (data: UpdateProviderUserRepositoryParams) => Promise<UpdateProviderUserRepositoryResult>
}

export type UpdateProviderUserRepositoryParams = UpdateProviderUserUseCaseParams

export type UpdateProviderUserRepositoryResult = ProviderUserEntity | Error
