import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class LoginProviderUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string
}
