/*
1- vamos importar os repositorys
2- importar injectable
3-importar o prismaService
4- fazer um injectable e imediatamente me baixo uma classe UpdateProviderUserDatabase que vai implementar a classe UpdateProviderUserRepository
abrimos a chave e fazemos um constructo com uma chave privada prisma que vai receber o PrismaService de colocamos o {} no final
agr vamos fazer uma funcção async com o nome updatedProviderUser que vai receber como parametro um (data: UpdateProviderUserRepositoryParams) que é uma Promisie<UpdateProviderUserRepositoryResult> {
    aqui vamos criar uma constante updatedProviderUser que vai receber o await, um this que vai bucar o prisma, dentro do prisma o providerUsers e vai usar o metodo update do prisma pra dizer as informações que serão atualizadas.

    em baixo nos faremos um if com parametro !updatedProviderUser que vai retornar um new Error

    caso ocorra tudo bem fazemos um return com a id e as propriedades que ele pode alterar.
}
*/

import {
  UpdateProviderUserRepository,
  UpdateProviderUserRepositoryParams,
  UpdateProviderUserRepositoryResult
} from '@/application/contracts/repositories/provider-user'
import { Injectable } from '@nestjs/common'
import { PrismaService } from './config/prisma.config'

@Injectable()
export class UpdateProviderUserDatabase implements UpdateProviderUserRepository {
  constructor(private prisma: PrismaService) {}

  async updateProviderUser(data: UpdateProviderUserRepositoryParams): Promise<UpdateProviderUserRepositoryResult> {
    const { id, name, email, password, gender, dateOfBirth, phone, address } = data

    const optionalProps = {
      ...(gender && { gender }),
      ...(dateOfBirth && { dateOfBirth }),
      ...(phone && { phone }),
      ...(address && { address })
    }

    const updateData = { name, email, password, ...optionalProps }

    const updatedProviderUser = await this.prisma.providerUsers.update({
      where: { id },
      data: updateData
    })

    if (!updatedProviderUser) {
      return new Error('Error  when updating provider user')
    }

    return {
      id: updatedProviderUser.id,
      name: updatedProviderUser.name,
      email: updatedProviderUser.email,
      password: updatedProviderUser.password
    }
  }
}
