import { Module } from '@nestjs/common'
import { ProviderUserModule, LoadLoginUserProviderDataModule } from '@/main/modules/'

@Module({
  imports: [ProviderUserModule, LoadLoginUserProviderDataModule],
  controllers: [],
  providers: []
})
export class AppModule {}
