import {
  CreateRaffleRepository,
  CreateRaffleRepositoryParams,
  CreateRaffleRepositoryResult
} from '@/application/contracts/repositories/raffle'
import { Injectable } from '@nestjs/common'

import { PrismaService } from './config/prisma.config'

@Injectable()
export class RaffleDatabase implements CreateRaffleRepository {
  constructor(private prisma: PrismaService) {}

  async insertRaffle(data: CreateRaffleRepositoryParams): Promise<CreateRaffleRepositoryResult> {
    try {
      const createdRaffle = await this.prisma.raffles.create({
        data: {
          ProviderUser: { connect: { id: data.providerUserId } },
          title: data.title,
          description: data?.description,
          amountNumber: data.amountNumber,
          winningNumber: data?.winningNumber,
          priceProduct: data?.priceProduct,
          priceNumber: data.priceNumber,
          drawDate: new Date(data.drawDate)
        }
      })

      return {
        id: createdRaffle.id,
        providerUserId: createdRaffle.providerUserId,
        title: createdRaffle.title,
        amountNumber: createdRaffle.amountNumber,
        winningNumber: createdRaffle.winningNumber,
        priceProduct: createdRaffle.priceProduct,
        priceNumber: createdRaffle.priceNumber,
        description: createdRaffle.description,
        drawDate: createdRaffle.drawDate,
        createdAt: createdRaffle.createdAt,
        updatedAt: createdRaffle.updatedAt,
        deletedAt: createdRaffle.deletedAt
      }
    } catch (error) {
      return error
    }
  }
}
