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
        providerUserId: data.providerUserId,
        title: data.title,
        amountNumber: data.amountNumber,
        winningNumber: data.winningNumber,
        priceProduct: data.priceProduct,
        priceNumber: data.priceNumber,
        description: data.description
      }
    })

    if (!createdRaffle) {
      return new Error('Error creating Raflle')
    }

    return {
      providerUserId: createdRaffle.providerUserId,
      title: createdRaffle.title,
      amountNumber: createdRaffle.amountNumber,
      winningNumber: createdRaffle.winningNumber,
      priceProduct: createdRaffle.priceProduct,
      priceNumber: createdRaffle.priceNumber,
      description: createdRaffle.description
    }
  }
}
