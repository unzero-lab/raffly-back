import { LoadProviderUserUseCase } from '@/domain/usecases/provider-user/load-provider-user.usecase'
import { Controller, Inject, Get, Res, Param } from '@nestjs/common'

@Controller('provider-users')
export class LoadProviderUserController {
  constructor(
    @Inject('LoadProviderUserUseCase')
    private readonly loadProviderUserService: LoadProviderUserUseCase
  ) {}

  @Get(':id')
  async handle(@Param('id') id: string, @Res() res: any): Promise<any> {
    const createdProviderUser = await this.loadProviderUserService.execute({ id })

    if (createdProviderUser instanceof Error) {
      const statusCode = createdProviderUser.name === 'NotFoundError' ? 404 : 500

      return res.status(statusCode).json({
        message: createdProviderUser.message
      })
    }

    return res.status(200).json(createdProviderUser)
  }
}
