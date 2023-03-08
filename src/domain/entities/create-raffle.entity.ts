export type RaffleEntity = {
  id?: string
  title?: string // user
  deleted?: boolean
  deletedAt?: Date
  createdAt?: Date
  updateAt?: Date
  drawDate?: Date
  amountNumber: number //user
  providerUserId: string
  winningNumber: number //user
  priceProduct: number //user
  priceNumber: number //user
  description: string //user
}
