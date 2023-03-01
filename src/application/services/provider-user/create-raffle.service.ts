import { CreateRaffleRepository } from '@/application/contracts/repositories/provider-user'

import { CreateRaffleUseCase, CreateRaffleUseCaseParams, CreateRaffleUseCaseResult } from '@/domain/usecases'

import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class CreateRaffleService implements CreateRaffleUseCase {
  constructor(@Inject('CreateRaffleRepository') private readonly RaffleRepository: CreateRaffleRepository) {}

  public async execute(params: CreateRaffleUseCaseParams): Promise<CreateRaffleUseCaseResult> {
    const CreatedRaflle = this.RaffleRepository.insertRaffle(params)

    if (!CreatedRaflle) {
      return new Error('Error creating Raflle')
    }

    return CreatedRaflle
  }
}
