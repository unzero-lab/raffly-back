import {
  CreateSubscriberUserRepository,
  CreateSubscriberUserRepositoryParams,
  CreateSubscriberUserRepositoryResult
} from '@/application/contracts/repositories/subscriber-user'

import { Injectable } from '@nestjs/common'
import { PrismaService } from './config/prisma.config'

@Injectable()
export class SubscriberUserDatabase implements CreateSubscriberUserRepository {
  constructor(private prisma: PrismaService) {}

  async insertSubscriberUser(
    data: CreateSubscriberUserRepositoryParams
  ): Promise<CreateSubscriberUserRepositoryResult> {
    const createdSubscriberUser = await this.prisma.subscriberUsers.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone
      }
    })
    if (!createdSubscriberUser) {
      return new Error('Error creating subscriber user')
    }

    return {
      id: createdSubscriberUser.id,
      name: createdSubscriberUser.name,
      email: createdSubscriberUser.email,
      phone: createdSubscriberUser.phone
    }
  }
}
