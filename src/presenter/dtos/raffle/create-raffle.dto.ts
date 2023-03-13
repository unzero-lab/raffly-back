import { IsNotEmpty, IsNumber, IsOptional, IsString, Matches } from 'class-validator'

export class CreateRaffleDto {
  @IsString()
  @IsNotEmpty()
  'providerUserId': string

  @IsString()
  @IsNotEmpty()
  'title': string

  @IsString()
  @IsOptional()
  'description': string

  @IsNumber()
  @IsNotEmpty()
  'amountNumber': number

  @IsNumber()
  @IsOptional()
  'winningNumber': number

  @IsNumber()
  @IsOptional()
  'priceProduct': number

  @IsNumber()
  @IsNotEmpty()
  'priceNumber': number

  @IsString()
  @IsNotEmpty()
  @Matches(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, {
    message: "Date format must be 'YYYY-MM-DD HH:mm:ss'"
  })
  'drawDate': string
}
