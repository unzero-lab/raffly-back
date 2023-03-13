/* 
 THIS IS A MOCK TO FRONTEND DEVELOPMENT
*/

import { Body, Controller, Get, Res } from '@nestjs/common'
import { ListRaffleDto } from '@/presenter/dtos/raffle'

@Controller('raffles')
export class ListRaffleController {
  @Get()
  async handle(@Body() body: ListRaffleDto, @Res() res: any): Promise<any> {
    return res.status(201).json([
      {
        id: '3c66d60c-4458-42ac-bb19-0d17994a1605',
        providerUserId: 'clf65kpqr0000phh5u0ehbmfi',
        title: 'Perfume Natura',
        amountNumber: 25,
        winningNumber: null,
        priceProduct: null,
        priceNumber: 1,
        description: 'Perfume gostozin nada enjoativo',
        drawDate: '2023-04-04T01:00:00.000Z',
        createdAt: '2023-03-13T01:44:25.131Z',
        updatedAt: '2023-03-13T01:44:25.131Z',
        deletedAt: null
      },
      {
        id: '3c66d60c-4458-42ac-bb19-0d17994a1605',
        providerUserId: 'clf65kpqr0000phh5u0ehbmfi',
        title: 'Perfume Natura',
        amountNumber: 25,
        winningNumber: null,
        priceProduct: null,
        priceNumber: 1,
        description: 'Perfume gostozin nada enjoativo',
        drawDate: '2023-04-04T01:00:00.000Z',
        createdAt: '2023-03-13T01:44:25.131Z',
        updatedAt: '2023-03-13T01:44:25.131Z',
        deletedAt: null
      },
      {
        id: '3c66d60c-4458-42ac-bb19-0d17994a1605',
        providerUserId: 'clf65kpqr0000phh5u0ehbmfi',
        title: 'Perfume Natura',
        amountNumber: 25,
        winningNumber: null,
        priceProduct: null,
        priceNumber: 1,
        description: 'Perfume gostozin nada enjoativo',
        drawDate: '2023-04-04T01:00:00.000Z',
        createdAt: '2023-03-13T01:44:25.131Z',
        updatedAt: '2023-03-13T01:44:25.131Z',
        deletedAt: null
      }
    ])
  }
}
