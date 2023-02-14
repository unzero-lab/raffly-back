import { Controller, Delete, Get, Post, Patch, Body } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { createRaffleBody } from './create-raflle-body';

@Controller('raffle')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.raffle.findMany();
  }

  @Post()
  async creat(@Body() body: createRaffleBody) {
    const {
      title,
      deleted,
      amount_number,
      winning_number,
      price_product,
      description,
      deletedAt,
      createdAt,
      updateAt,
      fk_provider_user_id,
      draw_date,
    } = body;

    await this.prisma.raffle.create({
      data: {
        id: randomUUID(),
        title,
        amount_number,
        winning_number,
        price_product,
        description,
        deleted,
        deletedAt,
        createdAt,
        updateAt,
        fk_provider_user_id,
        draw_date,
      },
    });
  }

  @Patch()
  update() {
    return this.prisma.raffle.findMany();
  }

  @Delete()
  delete() {
    return this.prisma.raffle.findMany();
  }
}
