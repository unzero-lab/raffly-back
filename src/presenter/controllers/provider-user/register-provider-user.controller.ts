import { RegisterProviderUserUseCase } from '@/domain/usecases/provider-user'
import { RegisterProviderUserDto } from '@/presenter/dtos/provider-user'
import { Body, Controller, Inject, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common'

@Controller('auth/register')
export class CreateProviderUserController {
  constructor(
    @Inject('RegisterProviderUserUseCase') private readonly registerProviderUserService: RegisterProviderUserUseCase
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async handle(@Body() body: RegisterProviderUserDto, @Res() res: any): Promise<any> {
    try {
      const { name, email, password } = body
      const providerUser = await this.registerProviderUserService.execute({
        name,
        email,
        password
      })

      if (providerUser instanceof Error) {
        if (providerUser.name === 'AlreadyExistsError') {
          return res.status(409).json({ message: providerUser.message })
        }
      }

      return res.status(201).json(providerUser)
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  }
}
