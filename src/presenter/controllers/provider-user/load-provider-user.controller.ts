import { LoadProviderUserUseCase } from '@/domain/usecases/load-provider-user.usecase'
import { Controller, Inject, Get, Res, Param } from '@nestjs/common'

@Controller('provider')
export class LoadProviderUserController {
  constructor(
    @Inject('LoadProviderUserUseCase')
    private readonly loadProviderUserService: LoadProviderUserUseCase
  ) {}

  @Get(':id')
  async handle(@Param('id') id: string, @Res() res: any): Promise<any> {
    const providerUser = await this.loadProviderUserService.execute({ id })

    if (providerUser instanceof Error) {
      const statusCode = providerUser.name === 'NotFoundError' ? 404 : 500

      return res.status(statusCode).json({
        message: providerUser.message
      })
    }

    return res.status(200).json(providerUser)
  }
}
