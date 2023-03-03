import { LoadLoginUserProviderDataService } from '@/application/services/load-login-user-provider-data'
import { Module } from '@nestjs/common'
import { LoadLoginUserProviderDataDatabase } from '@/infra/database/load-login-user-provider-data.database'
import { PrismaService } from '@/infra/database/config/prisma.config'
import { LoadLoginUserProviderDataController } from '@/presenter/controllers/load-login-user-provider-data'

@Module({
  imports: [],
  controllers: [LoadLoginUserProviderDataController],
  providers: [
    {
      provide: 'FetchUserDataRepository',
      useClass: LoadLoginUserProviderDataDatabase
    },
    {
      provide: 'LoadLoginUserProviderDataUseCase',
      useClass: LoadLoginUserProviderDataService
    },
    PrismaService
  ]
})
export class LoadLoginUserProviderDataModule {}
