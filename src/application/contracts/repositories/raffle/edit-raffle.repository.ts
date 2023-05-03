import { RaffleEntity } from '@/domain/entities'
import { EditRaffleUseCaseParams, EditRaffleUseCaseResult } from '@/domain/usecases/raffle/edit-raffle.usecase'

export interface EditRaffleRepository {
  updateRaffle: (id: string, data: EditRaffleUseCaseParams) => Promise<EditRaffleUseCaseResult>
}

export type EditRaffleRepositoryParams = EditRaffleUseCaseParams

export type EditRaffleRepositoryResult = RaffleEntity | Error
