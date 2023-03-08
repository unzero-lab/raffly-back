export interface GenerateTokenTask {
  generateToken(email: GenerateTokenTaskParams): Promise<GenerateTokenTaskResult>
}

export type GenerateTokenTaskParams = {
  id: string
  name: string
  email: string
}

export type GenerateTokenTaskResult = string
