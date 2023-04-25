/* 
1- importar a entidade
2- importar o caso de uso result
3- exportar uma interface com o nome da feat + repository onde dentro vai uma propriedade com o nome da feat e em seguida, dentro dos parenteses, vai receber um data: com o nome da feat + repositoryParams => e que vai ter que ser uma Promise do tipo <nome da feat + repositoryResult>
4- exportar as tipagens, dizendo que o UpdateProviderUserRepositoryParamsé igual ao UpdateProviderUserUseCaseParams
5- exportar as tipagens, dizendo que o UpdateProviderUserRepositoryResult é igual a Entity e o error
*/

import { ProviderUserEntity } from '@/domain/entities'
import { UpdateProviderUserUseCaseParams } from '@/domain/usecases'

export interface UpdateProviderUserRepository {
  updateProviderUser: (data: UpdateProviderUserRepositoryParams) => Promise<UpdateProviderUserRepositoryResult>
}

export type UpdateProviderUserRepositoryParams = UpdateProviderUserUseCaseParams

export type UpdateProviderUserRepositoryResult = ProviderUserEntity | Error
