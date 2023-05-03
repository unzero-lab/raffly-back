import { RaffleEntity } from '@/domain/entities'

export interface EditRaffleUseCase {
  execute(id: string, params: EditRaffleUseCaseParams): Promise<EditRaffleUseCaseResult>
}

export type EditRaffleUseCaseParams = {
  providerUserId: string
  title: string
  priceProduct: number
  amountNumber: number
  priceNumber: number
  drawDate: string
  description?: string
  winningNumber?: number
}

export type EditRaffleUseCaseResult = RaffleEntity | Error
