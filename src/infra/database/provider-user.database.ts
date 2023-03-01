import {
  CreateProviderUserRepository,
  CreateProviderUserRepositoryParams,
  CreateProviderUserRepositoryResult
} from '@/application/contracts/repositories/provider-user'
import { Injectable } from '@nestjs/common/decorators'
import { PrismaService } from './config/prisma.config'

@Injectable()
export class ProviderUserDatabase implements CreateProviderUserRepository {
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
}
