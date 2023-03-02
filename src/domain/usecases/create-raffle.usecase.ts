import { RaffleEntity } from '@/domain/entities'

export interface CreateRaffleUseCase {
  execute(params: CreateRaffleUseCaseParams): Promise<CreateRaffleUseCaseResult>
}

export type CreateRaffleUseCaseParams = {
  title?: string
  deleted?: boolean
  deletedAt?: Date
  createdAt?: Date
  updateAt?: Date
  drawDate?: Date
  amountNumber: number
  providerUserId: string
  winningNumber: number
  priceProduct: number
  priceNumber: number
  description: string
}

export type CreateRaffleUseCaseResult = RaffleEntity | Error
