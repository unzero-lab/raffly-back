import { UpdateProviderUserService } from '@/application/services/provider-user/update-provider-user.service'
import { Module } from '@nestjs/common'
import { UpdateProviderUserDatabase } from '@/infra/database'
import { PrismaService } from '@/infra/database/config/prisma.config'
import { UpdateProviderUserController } from '@/presenter/controllers/provider-user'

@Module({
  imports: [],
  controllers: [UpdateProviderUserController],
  providers: [
    {
      provide: 'UpdateProviderUserRepository',
      useClass: UpdateProviderUserDatabase
    },
    {
      provide: 'UpdateProviderUserUseCase',
      useClass: UpdateProviderUserService
    },
    PrismaService
  ]
})
export class UpdateProviderUserModule {}
