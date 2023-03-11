import { Module } from '@nestjs/common'
import { ProviderUserModule } from '@/main/modules/'
import { RaffleModule } from './modules/raffle.module'

@Module({
  imports: [ProviderUserModule, RaffleModule],
  controllers: [],
  providers: []
})
export class AppModule {}
