export type RaffleEntity = {
  id?: string
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
