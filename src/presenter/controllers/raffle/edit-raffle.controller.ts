import { EditRaffleDto } from '@/presenter/dtos/raffle/edit-raffle.dto'
import { EditRaffleUseCase } from '@/domain/usecases/raffle/edit-raffle.usecase'
import { Body, Controller, Inject, Put, Res, Param } from '@nestjs/common'

@Controller('raffles')
export class EditRaffleController {
  constructor(@Inject('EditRaffleUseCase') private readonly editRaffleService: EditRaffleUseCase) {}

  @Put(':id')
  async handle(@Body() body: EditRaffleDto, @Res() res: any, @Param('id') id: string): Promise<any> {
    const raffle = await this.editRaffleService.execute(id, body)

    if (raffle instanceof Error) {
      return raffle.name === 'NotFoundError' ? res.status(404).json(raffle) : res.status(500).json(raffle)
    }

    return res.status(200).json(raffle)
  }
}
