export interface ComparePasswordsTask {
  compare(params: ComparePasswordsTaskParams): Promise<ComparePasswordsTaskResult>
}

export type ComparePasswordsTaskParams = {
  plainText: string
  hashedText: string
}

export type ComparePasswordsTaskResult = boolean
