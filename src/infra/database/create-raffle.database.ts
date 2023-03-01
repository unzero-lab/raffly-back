import {
  CreateRaffleRepository,
  CreateRaffleRepositoryParams,
  CreateRaffleRepositoryResult
} from '@/application/contracts/repositories/provider-user'

import { Injectable } from '@nestjs/common/decorators'
import { PrismaService } from './config/prisma.config'

@Injectable()
export class RaffleDatabase implements CreateRaffleRepository {
  constructor(private prisma: PrismaService) {}

  async insertRaffle(data: CreateRaffleRepositoryParams): Promise<CreateRaffleRepositoryResult> {
    const createdRaffle = await this.prisma.raffle.create({
      data: {
        title: data.title,
        amountNumber: data.amountNumber,
        winningNumber: data.winningNumber,
        priceProduct: data.priceProduct,
        description: data.description
      }
    })

    if (!createdRaffle) {
      return new Error('Error creating Raflle')
    }

    return {
      title: createdRaffle.title,
      amountNumber: createdRaffle.amountNumber,
      winningNumber: createdRaffle.amountNumber,
      priceProduct: createdRaffle.priceProduct,
      description: createdRaffle.description
    }
  }
}
