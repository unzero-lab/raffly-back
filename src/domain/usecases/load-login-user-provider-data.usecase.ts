import { ProviderUserEntity } from '@/domain/entities'
import { Gender } from '@/domain/enums'

export interface LoadLoginUserProviderDataUseCase {
  execute(params: LoadLoginUserProviderDataUseCaseParams): Promise<LoadLoginUserProviderDataUseCaseResult>
}

export type LoadLoginUserProviderDataUseCaseParams = {
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

export type LoadLoginUserProviderDataUseCaseResult = ProviderUserEntity | Error
