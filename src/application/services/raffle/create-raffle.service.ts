import { CreateRaffleRepository } from '@/application/contracts/repositories/raffle'
import { CreateRaffleError } from '@/domain/errors/create-raffle.error'
import { CreateRaffleUseCase, CreateRaffleUseCaseParams, CreateRaffleUseCaseResult } from '@/domain/usecases/raffle'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class CreateRaffleService implements CreateRaffleUseCase {
  constructor(@Inject('CreateRaffleRepository') private readonly RaffleRepository: CreateRaffleRepository) {}

  public async execute(params: CreateRaffleUseCaseParams): Promise<CreateRaffleUseCaseResult> {
    try {
      const createdRaffle = this.RaffleRepository.insertRaffle(params)

      if (createdRaffle instanceof Error) {
        return createdRaffle
      }

      return createdRaffle
    } catch (error) {
      return new CreateRaffleError()
    }
  }
}
