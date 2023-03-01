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
  ProviderUserId?: number
  winningNumber: number
  priceProduct: number
  description: string
}

export type CreateRaffleUseCaseResult = RaffleEntity | Error
