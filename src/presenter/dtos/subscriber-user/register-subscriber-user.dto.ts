import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { IsBrPhoneNumberOnlyDigits } from '@/presenter/dtos/customs-decorators'

export class RegisterSubscriberUserDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsBrPhoneNumberOnlyDigits()
  phone: string
}
