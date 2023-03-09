export interface LoginProviderUserUseCase {
  execute(params: LoginProviderUserUseCaseParams): Promise<LoginProviderUserUseCaseResult>
}

export type LoginProviderUserUseCaseParams = {
  email: string
  password: string
}

export type LoginProviderUserUseCaseResult = { token: string } | Error
