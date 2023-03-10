import { SubscriberUserEntity } from '@/domain/entities'
import { RegisterSubscriberUserUseCaseParams } from '@/domain/usecases/subscriber-user'

export interface CreateSubscriberUserRepository {
  insertSubscriberUser: (data: CreateSubscriberUserRepositoryParams) => Promise<CreateSubscriberUserRepositoryResult>
}

export type CreateSubscriberUserRepositoryParams = RegisterSubscriberUserUseCaseParams

export type CreateSubscriberUserRepositoryResult = SubscriberUserEntity | Error
