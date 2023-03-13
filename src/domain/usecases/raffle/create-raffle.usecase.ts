import { RaffleEntity } from '@/domain/entities'

export interface CreateRaffleUseCase {
  execute(params: CreateRaffleUseCaseParams): Promise<CreateRaffleUseCaseResult>
}

export type CreateRaffleUseCaseParams = {
  providerUserId: string
  title: string
  priceProduct: number
  amountNumber: number
  priceNumber: number
  drawDate: string
  description?: string
  winningNumber?: number
}

export type CreateRaffleUseCaseResult = RaffleEntity | Error
