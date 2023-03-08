import {
  FetchUserDataRepository,
  FetchUserDataRepositoryParams,
  FetchUserDataRepositoryResult
} from '@/application/contracts/repositories/load-login-user-provider-data'
import { Injectable } from '@nestjs/common'
import { PrismaService } from './config/prisma.config'

@Injectable()
export class LoadLoginUserProviderDataDatabase implements FetchUserDataRepository {
  constructor(private prisma: PrismaService) {}

  async findProviderUser(data: FetchUserDataRepositoryParams): Promise<FetchUserDataRepositoryResult> {
    const isProviderUser = await this.prisma.providerUsers.findUnique({
      where: { id: data.providerUserId }
    })

    if (!isProviderUser) {
      return new Error('Error load provider user')
    }

    return {
      id: isProviderUser.id,
      name: isProviderUser.name,
      email: isProviderUser.email,
      password: isProviderUser.password,
      gender: isProviderUser.gender,
      dateOfBirth: isProviderUser.dateOfBirth,
      phone: isProviderUser.phone
    }
  }
}
