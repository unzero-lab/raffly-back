export interface SaveTokenProviderUserRepository {
  saveToken: (data: SaveTokenProviderUserRepositoryParams) => Promise<SaveTokenProviderUserRepositoryResult>
}

export type SaveTokenProviderUserRepositoryParams = {
  id: string
  token: string
}

export type SaveTokenProviderUserRepositoryResult = boolean
