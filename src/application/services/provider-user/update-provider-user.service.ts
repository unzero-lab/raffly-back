/* 
1- importar updateUserRepository
2- importar os UseCase's
3- importar o Inject e o Injectable
4- fazer o @injectable() e imediatamente em baixo 
exportar uma classe com nom UpdateProviderUserService que vai implementar o UpdateProviderUserUseCase
abrir uma chave e criar um constructor
com o @Inject abrir parênteses e escrever o updateProviderUserRepository
colocar uma 'chave' privada chamada private e uma 'placa' sinalizando readonly para uma propriedade que nao pode ser alterada que é a providerUserRespository que vai armazenar o UpdateProviderUserRepository depois so abrir uma chave e passar para a proxima etapa
fazemos um função assícrona publica com o metodo execute que veio la da interface feita no caso de uso com o (params: UpdateProviderUserUseCasePamrs) que vai receber uma Promisie do tipo <UpdateProviderUserUseCaseResult> abrimos a chave {} e dentro vamos fazer uma const changeProvideruser 
e nessa constante vamos por um await e chamar providerUserRepository de dentro da classe UpdateProviderUserService com o this e mais um . pra chamar o updateProviderUser que fizemos la no repository e por params dentro de parenteses
depois fazemos um if (!updateProviderUser) {
    return new Error('Error  when updating provider user')
}

return updateProviderUser
*/

import { UpdateProviderUserRepository } from '@/application/contracts/repositories/provider-user'
import {
  UpdateProviderUserUseCase,
  UpdateProviderUserUseCaseParams,
  UpdateProviderUserUseCaseResult
} from '@/domain/usecases'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class UpdateProviderUserService implements UpdateProviderUserUseCase {
  constructor(
    @Inject('UpdateProviderUserRepository') private readonly providerUserRepository: UpdateProviderUserRepository
  ) {}

  public async execute(params: UpdateProviderUserUseCaseParams): Promise<UpdateProviderUserUseCaseResult> {
    const updatedProviderUser = await this.providerUserRepository.updateProviderUser(params)

    if (!updatedProviderUser) {
      return new Error('Error when updating provider User')
    }
    return updatedProviderUser
  }
}
