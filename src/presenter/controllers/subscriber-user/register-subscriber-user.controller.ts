import { RegisterSubscriberUserUseCase } from '@/domain/usecases/subscriber-user'
import { Body, Controller, Inject, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common'
import { RegisterSubscriberUserDto } from '@/presenter/dtos/subscriber-user'

@Controller('subscriber-users')
export class RegisterSubscriberUserController {
  constructor(
    @Inject('RegisterSubscriberUserUseCase')
    private readonly registerSubscriberUserService: RegisterSubscriberUserUseCase
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async handle(@Body() body: RegisterSubscriberUserDto, @Res() res: any): Promise<any> {
    const { name, email, phone } = body

    const createdSubscriberUser = await this.registerSubscriberUserService.execute({
      name,
      email,
      phone
    })

    if (createdSubscriberUser instanceof Error) {
      const statusCode = createdSubscriberUser.name === 'AlreadyExistsError' ? 409 : 500

      return res.status(statusCode).json({
        message: createdSubscriberUser.message
      })
    }

    return res.status(201).json(createdSubscriberUser)
  }
}
