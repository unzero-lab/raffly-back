import { ProviderUserModule, SubscriberUserModule } from '@/main/modules/'
import { RaffleModule } from '@/main/modules'
import { Module } from '@nestjs/common'

@Module({
  imports: [ProviderUserModule, RaffleModule, SubscriberUserModule],
  controllers: [],
  providers: []
})
export class AppModule {}
