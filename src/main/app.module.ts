import { Module } from '@nestjs/common'
import { ProviderUserModule } from '@/main/modules'

@Module({
  imports: [ProviderUserModule],
  controllers: [],
  providers: []
})
export class AppModule {}
