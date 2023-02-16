import { ProviderUser } from '@/domain/entities'
import { Gender } from '@/domain/enums'

export interface CreateProviderUserRepository {
  create(params: CreateProviderUserRepositoryParams): Promise<CreateProviderUserRepositoryResult>
}

export type CreateProviderUserRepositoryParams = {
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

export type CreateProviderUserRepositoryResult = ProviderUser | Error
