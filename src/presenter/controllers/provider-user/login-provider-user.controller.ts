import { LoginProviderUserUseCase } from '@/domain/usecases'
import { LoginProviderUserDto } from '@/presenter/dtos'
import { Body, Controller, Inject, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common'

@Controller('auth/login')
export class LoginProviderUserController {
  constructor(
    @Inject('LoginProviderUserUseCase') private readonly loginProviderUserService: LoginProviderUserUseCase
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async handle(@Body() body: LoginProviderUserDto, @Res() res: any): Promise<any> {
    const { email, password } = body
    const hasAutenticated = await this.loginProviderUserService.execute({
      email,
      password
    })

    if (hasAutenticated instanceof Error) {
      return res.status(400).json({
        message: hasAutenticated.message
      })
    }

    return res.status(201).json(hasAutenticated)
  }
}
