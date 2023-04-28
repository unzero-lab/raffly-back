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
