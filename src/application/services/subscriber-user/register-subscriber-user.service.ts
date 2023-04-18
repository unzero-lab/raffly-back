import { CreateSubscriberUserRepository } from '@/application/contracts/repositories/subscriber-user'
import { CreateSubscriberUserError } from '@/domain/errors'
import {
  RegisterSubscriberUserUseCase,
  RegisterSubscriberUserUseCaseParams,
  RegisterSubscriberUserUseCaseResult
} from '@/domain/usecases/subscriber-user'

import { Inject, Injectable } from '@nestjs/common/decorators'

@Injectable()
export class RegisterSubscriberUserService implements RegisterSubscriberUserUseCase {
  constructor(
    @Inject('CreateSubscriberUserRepository') private readonly subscriberUserRepository: CreateSubscriberUserRepository
  ) {}

  public async execute(params: RegisterSubscriberUserUseCaseParams): Promise<RegisterSubscriberUserUseCaseResult> {
    const createdSubscriberUser = await this.subscriberUserRepository.insertSubscriberUser(params)

    if (!createdSubscriberUser) {
      return new CreateSubscriberUserError()
    }

    return createdSubscriberUser
  }
}
