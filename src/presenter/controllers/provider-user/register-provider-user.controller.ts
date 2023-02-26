import { RegisterProviderUserUseCase } from '@/domain/usecases'
import { Body, Controller, Inject, Post, Res } from '@nestjs/common'

@Controller('auth/register')
export class CreateProviderUserController {
  constructor(
    @Inject('RegisterProviderUserUseCase') private readonly registerProviderUserService: RegisterProviderUserUseCase
  ) {}

  @Post()
  async handle(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Res() res: any
  ): Promise<any> {
    const providerUser = await this.registerProviderUserService.execute({
      name,
      email,
      password
    })

    if (providerUser instanceof Error) {
      return res.status(400).json({
        message: providerUser.message
      })
    }

    return res.status(201).json(providerUser)
  }
}
