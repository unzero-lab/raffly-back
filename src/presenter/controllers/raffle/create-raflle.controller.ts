import { CreateRaffleDto } from '@/presenter/dtos/raffle'
import { CreateRaffleUseCase } from '@/domain/usecases/raffle'
import { Body, Controller, Inject, Post, Res } from '@nestjs/common'

@Controller('raffles')
export class CreateRaffleController {
  constructor(@Inject('CreateRaffleUseCase') private readonly CreateRaffleService: CreateRaffleUseCase) {}

  @Post()
  async handle(@Body() body: CreateRaffleDto, @Res() res: any): Promise<any> {
    const raffle = await this.CreateRaffleService.execute(body)

    if (raffle instanceof Error) {
      return res.status(400).json({ message: raffle.message })
    }

    return res.status(201).json(raffle)
  }
}
