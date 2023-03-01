export type RaffleEntity = {
  id?: string
  title?: string // user
  deleted?: boolean
  deletedAt?: Date
  createdAt?: Date
  updateAt?: Date
  drawDate?: Date
  amountNumber: number //user
  providerUserId?: number
  winningNumber: number //user
  priceProduct: number //user
  description: string //user
}
