import { LoginProviderUserService, RegisterProviderUserService } from '@/application/services/provider-user'
import { Module } from '@nestjs/common'
import { ProviderUserDatabase } from '@/infra/database'
import { PrismaService } from '@/infra/database/config/prisma.config'
import { CreateProviderUserController, LoginProviderUserController } from '@/presenter/controllers/provider-user'
import { AuthService } from '@/infra/external-services/auth'

@Module({
  imports: [],
  controllers: [CreateProviderUserController, LoginProviderUserController],
  providers: [
    {
      provide: 'CreateProviderUserRepository',
      useClass: ProviderUserDatabase
    },
    {
      provide: 'RegisterProviderUserUseCase',
      useClass: RegisterProviderUserService
    },
    {
      provide: 'FindProviderUserByEmailRepository',
      useClass: ProviderUserDatabase
    },
    {
      provide: 'SaveTokenProviderUserRepository',
      useClass: ProviderUserDatabase
    },
    {
      provide: 'GenerateTokenTask',
      useClass: AuthService
    },
    {
      provide: 'ComparePasswordsTask',
      useClass: AuthService
    },
    {
      provide: 'LoginProviderUserUseCase',
      useClass: LoginProviderUserService
    },
    PrismaService
  ]
})
export class ProviderUserModule {}
