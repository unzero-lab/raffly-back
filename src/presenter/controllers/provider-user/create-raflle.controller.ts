import { CreateRaffleUseCase } from '@/domain/usecases'
import { Body, Controller, Inject, Post, Res } from '@nestjs/common'
@Controller('raffles')
export class CreateRaffleController {
  constructor(@Inject('CreateRaffleUseCase') private readonly CreateRaffleService: CreateRaffleUseCase) {}

  @Post()
  async handle(
    @Body('providerUserId') providerUserId: string,
    @Body('title') title: string,
    @Body('amountNumber') amountNumber: number,
    @Body('winningNumber') winningNumber: number,
    @Body('priceProduct') priceProduct: number,
    @Body('priceNumber') priceNumber: number,
    @Body('description') description: string,
    @Res() res: any
  ): Promise<any> {
    const raffle = await this.CreateRaffleService.execute({
      providerUserId,
      title,
      amountNumber,
      winningNumber,
      priceProduct,
      priceNumber,
      description
    })

    if (raffle instanceof Error) {
      return res.status(400).json({ message: raffle.message })
    }

    return res.status(201).json(raffle)
  }
}
