export type RaffleEntity = {
  id?: string
  title?: string
  deletedAt?: Date
  createdAt?: Date
  updatedAt?: Date
  drawDate?: Date
  amountNumber: number
  providerUserId: string
  winningNumber: number
  priceProduct: number
  priceNumber: number
  description: string
}
