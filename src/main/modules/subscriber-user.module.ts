import { RegisterSubscriberUserService } from '@/application/services/provider-user'

import { Module } from '@nestjs/common'

import { SubscriberUserDatabase } from '@/infra/database/subscriber-user.database'

import { PrismaService } from '@/infra/database/config/prisma.config'

import { CreateSubscriberUserController } from '@/presenter/controllers/provider-user'

@Module({
  imports: [],
  controllers: [CreateSubscriberUserController],
  providers: [
    {
      provide: 'CreateSubscriberUserRepository',
      useClass: SubscriberUserDatabase
    },
    {
      provide: 'RegisterSubscriberUserUseCase',
      useClass: RegisterSubscriberUserService
    },
    PrismaService
  ]
})
export class SubscriberUserModule {}
