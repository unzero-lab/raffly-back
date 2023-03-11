import { RegisterSubscriberUserService } from '@/application/services/subscriber-user'
import { Module } from '@nestjs/common'
import { SubscriberUserDatabase } from '@/infra/database/subscriber-user.database'
import { PrismaService } from '@/infra/database/config/prisma.config'
import { RegisterSubscriberUserController } from '@/presenter/controllers/subscriber-user'

@Module({
  imports: [],
  controllers: [RegisterSubscriberUserController],
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
