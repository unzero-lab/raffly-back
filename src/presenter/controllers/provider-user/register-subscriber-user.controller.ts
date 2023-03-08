import { RegisterSubscriberUserUseCase } from '@/domain/usecases'

import { Body, Controller, Inject, Post, Res } from '@nestjs/common'

@Controller('subscriber-users')
export class CreateSubscriberUserController {
  constructor(
    @Inject('RegisterSubscriberUserUseCase')
    private readonly registerSubscriberUserService: RegisterSubscriberUserUseCase
  ) {}

  @Post()
  async handle(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('phone') phone: string,
    @Res() res: any
  ): Promise<any> {
    const subscriberUser = await this.registerSubscriberUserService.execute({
      name,
      email,
      phone
    })

    if (subscriberUser instanceof Error) {
      return res.status(400).json({ message: subscriberUser.message })
    }

    return res.status(201).json(subscriberUser)
  }
}
