import { Gender } from '@/domain/enums'
import { ProviderUserEntity } from '@/domain/entities'

export interface UpdateProviderUserUseCase {
  execute(params: UpdateProviderUserUseCaseParams): Promise<UpdateProviderUserUseCaseResult>
}

export type UpdateProviderUserUseCaseParams = {
  id?: string
  name: string
  email: string
  password: string
  gender?: Gender
  dateOfBirth?: Date
  phone?: string
  address?: {
    street: string
    city: string
    state: string
    country: string
    zipCode: string
  }
}

export type UpdateProviderUserUseCaseResult = ProviderUserEntity | Error
