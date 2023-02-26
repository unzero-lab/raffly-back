import { RegisterProviderUserService } from '@/application/services/provider-user'
import { Module } from '@nestjs/common'
import { ProviderUserDatabase } from '@/infra/database'
import { PrismaService } from '@/infra/database/config/prisma.config'
import { CreateProviderUserController } from '@/presenter/controllers/provider-user'

@Module({
  imports: [],
  controllers: [CreateProviderUserController],
  providers: [
    {
      provide: 'CreateProviderUserRepository',
      useClass: ProviderUserDatabase
    },
    {
      provide: 'RegisterProviderUserUseCase',
      useClass: RegisterProviderUserService
    },
    PrismaService
  ]
})
export class ProviderUserModule {}
