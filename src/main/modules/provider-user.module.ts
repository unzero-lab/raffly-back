import {
  LoadProviderUserService,
  LoginProviderUserService,
  RegisterProviderUserService
} from '@/application/services/provider-user'
import { Module } from '@nestjs/common'
import { ProviderUserDatabase } from '@/infra/database'
import { PrismaService } from '@/infra/database/config/prisma.config'
import {
  CreateProviderUserController,
  LoadProviderUserController,
  LoginProviderUserController
} from '@/presenter/controllers/provider-user'
import { AuthService } from '@/infra/external-services/auth'

@Module({
  imports: [],
  controllers: [CreateProviderUserController, LoginProviderUserController, LoadProviderUserController],
  providers: [
    { provide: 'ComparePasswordsTask', useClass: AuthService },
    { provide: 'CreateProviderUserRepository', useClass: ProviderUserDatabase },
    { provide: 'CriptographPasswordTask', useClass: AuthService },
    { provide: 'FindProviderUserByEmailRepository', useClass: ProviderUserDatabase },
    { provide: 'FindProviderUserByIdRepository', useClass: ProviderUserDatabase },
    { provide: 'GenerateTokenTask', useClass: AuthService },
    { provide: 'LoadProviderUserUseCase', useClass: LoadProviderUserService },
    { provide: 'LoginProviderUserUseCase', useClass: LoginProviderUserService },
    { provide: 'RegisterProviderUserUseCase', useClass: RegisterProviderUserService },
    { provide: 'SaveTokenProviderUserRepository', useClass: ProviderUserDatabase },
    { provide: 'UpdateProviderUserRepository', useClass: ProviderUserDatabase },
    PrismaService
  ]
})
export class ProviderUserModule {}
