import { LoadLoginUserProviderDataUseCase } from '@/domain/usecases/load-login-user-provider-data.usecase'
import { Body, Controller, Inject, Get, Res } from '@nestjs/common'

@Controller('provider/:id')
export class LoadLoginUserProviderDataController {
  constructor(
    @Inject('LoadLoginUserProviderDataUseCase')
    private readonly loadLoginUserProviderDataService: LoadLoginUserProviderDataUseCase
  ) {}

  @Get()
  async handle(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('gender') gender: string,
    @Body('phone') phone: string,
    @Body('dateOfBirth') dateOfBirth: string,
    @Res() res: any
  ): Promise<any> {
    const providerUser = await this.loadLoginUserProviderDataService.execute({
      name,
      email,
      password,
      gender,
      dateOfBirth,
      phone
    })

    if (providerUser instanceof Error) {
      return res.status(400).json({
        message: providerUser.message
      })
    }

    return res.status(201).json(providerUser)
  }
}
