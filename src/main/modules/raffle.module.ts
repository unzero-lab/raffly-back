import { CreateRaffleService } from '@/application/services/provider-user'
import { Module } from '@nestjs/common'
import { RaffleDatabase } from '@/infra/database'
import { PrismaService } from '@/infra/database/config/prisma.config'
import { CreateRaffleController } from '@/presenter/controllers/provider-user'

@Module({
  imports: [],
  controllers: [CreateRaffleController],
  providers: [
    {
      provide: 'CreateRaffleRepository',
      useClass: RaffleDatabase
    },
    {
      provide: 'CreateRaffleUseCase',
      useClass: CreateRaffleService
    },
    PrismaService
  ]
})
export class RaffleModule {}
