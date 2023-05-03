import { EditRaffleRepository } from '@/application/contracts/repositories/raffle/edit-raffle.repository'
import { EditRaffleError } from '@/domain/errors/edit-raffle.error'
import { EditRaffleUseCase, EditRaffleUseCaseParams, EditRaffleUseCaseResult } from '@/domain/usecases/raffle'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class EditRaffleService implements EditRaffleUseCase {
  constructor(@Inject('EditRaffleRepository') private readonly raffleRepository: EditRaffleRepository) {}

  public async execute(id: string, params: EditRaffleUseCaseParams): Promise<EditRaffleUseCaseResult> {
    try {
      const raffle = await this.raffleRepository.updateRaffle(id, params)

      if (!raffle) {
        return new EditRaffleError()
      }

      const updatedRaffle = await this.raffleRepository.updateRaffle(id, params)

      if (updatedRaffle instanceof Error) {
        return updatedRaffle
      }

      return updatedRaffle
    } catch (error) {
      return new EditRaffleError()
    }
  }
}
