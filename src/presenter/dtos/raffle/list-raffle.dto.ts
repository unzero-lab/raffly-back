import { IsNotEmpty, IsString } from 'class-validator'

export class ListRaffleDto {
  @IsString()
  @IsNotEmpty()
  'accessToken': string
}
