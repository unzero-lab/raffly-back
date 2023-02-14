import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
//import { PrismaModule } from './modules/prisma';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
