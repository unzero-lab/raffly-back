export type ProviderUserEntity = {
  id: string
  name: string
  email: string
  password: string
  gender?: string
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
