import { UpdateProviderUserUseCase } from '@/domain/usecases/provider-user'
import { Body, Controller, Inject, Put, Res } from '@nestjs/common'

@Controller('update/provider-user')
export class UpdateProviderUserController {
  constructor(
    @Inject('UpdateProviderUserUseCase') private readonly updateProviderUserService: UpdateProviderUserUseCase
  ) {}

  @Put()
  async handle(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Res() res: any
  ): Promise<any> {
    const providerUser = await this.updateProviderUserService.execute({
      name,
      email,
      password
    })

    if (providerUser instanceof Error) {
      return res.status(400).json({
        message: providerUser.message
      })
    }

    return res.status(200).json({ providerUser })
  }
}
