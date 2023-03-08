import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class RegisterProviderUserDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string
}