// raffle.module.ts

import { Module } from '@nestjs/common'
import { CreateRaffleController } from '@/presenter/controllers/raffle'
import { CreateRaffleService } from '@/application/services/raffle'
import { RaffleDatabase } from '@/infra/database/raffle.database'
import { PrismaService } from '@/infra/database/config/prisma.config'

@Module({
  imports: [],
  controllers: [CreateRaffleController],
  providers: [
    { provide: 'CreateRaffleRepository', useClass: RaffleDatabase },
    { provide: 'CreateRaffleUseCase', useClass: CreateRaffleService },
    PrismaService
  ]
})
export class RaffleModule {}
