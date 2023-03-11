import { IsNumber, IsString } from 'class-validator'

export class CreateRaffleDto {
  @IsString()
  providerUserId: string

  @IsString()
  title: string

  @IsString()
  description: string

  @IsNumber()
  amountNumber: number

  @IsNumber()
  winningNumber: number

  @IsNumber()
  priceProduct: number

  @IsNumber()
  priceNumber: number
}
