import { CreateSubscriberUserRepository } from '@/application/contracts/repositories/provider-user'
import {
  RegisterSubscriberUserUseCase,
  RegisterSubscriberUserUseCaseParams,
  RegisterSubscriberUserUseCaseResult
} from '@/domain/usecases'

import { Inject, Injectable } from '@nestjs/common/decorators'

@Injectable()
export class RegisterSubscriberUserService implements RegisterSubscriberUserUseCase {
  constructor(
    @Inject('CreateSubsciberUserRepository') private readonly subscriberUserRepository: CreateSubscriberUserRepository
  ) {}

  public async execute(params: RegisterSubscriberUserUseCaseParams): Promise<RegisterSubscriberUserUseCaseResult> {
    const createdSubscriberUser = await this.subscriberUserRepository.insertSubscriberUser(params)

    if (!createdSubscriberUser) {
      return new Error('Error creating subscriber user')
    }

    return createdSubscriberUser
  }
}
