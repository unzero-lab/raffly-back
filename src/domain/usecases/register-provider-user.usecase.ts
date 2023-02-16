import { ProviderUser } from '@/domain/entities'
import { Gender } from '@/domain/enums'

export interface RegisterProviderUserUseCase {
  execute(params: RegisterProviderUserUseCaseParams): Promise<RegisterProviderUserUseCaseResult>
}

export type RegisterProviderUserUseCaseParams = {
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

export type RegisterProviderUserUseCaseResult = ProviderUser | Error
