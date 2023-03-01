import { Module } from '@nestjs/common'
import { ProviderUserModule } from '@/main/modules'
import { RaffleModule } from '@/main/modules'

@Module({
  imports: [ProviderUserModule, RaffleModule],
  controllers: [],
  providers: []
})
export class AppModule {}
