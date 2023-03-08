import {
  CreateProviderUserRepository,
  CreateProviderUserRepositoryParams,
  CreateProviderUserRepositoryResult,
  FindProviderUserByEmailRepository,
  FindProviderUserByEmailRepositoryParams,
  FindProviderUserByEmailRepositoryResult,
  SaveTokenProviderUserRepository,
  SaveTokenProviderUserRepositoryParams,
  SaveTokenProviderUserRepositoryResult
} from '@/application/contracts/repositories/provider-user'
import { Injectable } from '@nestjs/common'
import { PrismaService } from './config/prisma.config'

@Injectable()
export class ProviderUserDatabase
  implements CreateProviderUserRepository, FindProviderUserByEmailRepository, SaveTokenProviderUserRepository
{
  constructor(private prisma: PrismaService) {}

  async insertProviderUser(data: CreateProviderUserRepositoryParams): Promise<CreateProviderUserRepositoryResult> {
    const createdProviderUser = await this.prisma.providerUsers.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password
      }
    })

    if (!createdProviderUser) {
      return new Error('Error creating provider user')
    }

    return {
      id: createdProviderUser.id,
      name: createdProviderUser.name,
      email: createdProviderUser.email,
      password: createdProviderUser.password
    }
  }

  async findProviderUserByEmail({
    email
  }: FindProviderUserByEmailRepositoryParams): Promise<FindProviderUserByEmailRepositoryResult> {
    const providerUser = await this.prisma.providerUsers.findUnique({
      where: {
        email
      }
    })

    if (!providerUser) {
      return null
    }

    return {
      id: providerUser.id,
      name: providerUser.name,
      email: providerUser.email,
      password: providerUser.password
    }
  }

  async saveToken(data: SaveTokenProviderUserRepositoryParams): Promise<SaveTokenProviderUserRepositoryResult> {
    const updatedProviderUser = await this.prisma.providerUsers.update({
      where: {
        id: data.id
      },
      data: {
        token: data.token
      }
    })

    if (!updatedProviderUser) {
      return false
    }

    return true
  }
}
