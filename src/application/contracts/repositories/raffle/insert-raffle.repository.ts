import { RaffleEntity } from '@/domain/entities'
import { CreateRaffleUseCaseParams } from '@/domain/usecases/raffle'

export interface CreateRaffleRepository {
  insertRaffle: (data: CreateRaffleUseCaseParams) => Promise<CreateRaffleRepositoryResult>
}

export type CreateRaffleRepositoryParams = CreateRaffleUseCaseParams

export type CreateRaffleRepositoryResult = RaffleEntity | Error
