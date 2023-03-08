export interface CriptographPasswordTask {
  save: (data: CriptographPasswordTaskParams) => Promise<CriptographPasswordTaskResult>
}

export interface CriptographPasswordTaskParams {
  password: string
}

export type CriptographPasswordTaskResult = string
