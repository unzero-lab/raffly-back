import { SubscriberUserEntity } from '../entities'

export interface RegisterSubscriberUserUseCase {
  execute(params: RegisterSubscriberUserUseCaseParams): Promise<RegisterSubscriberUserUseCaseResult>
}

export type RegisterSubscriberUserUseCaseParams = {
  name: string
  email: string
  phone?: string
}

export type RegisterSubscriberUserUseCaseResult = SubscriberUserEntity | Error
