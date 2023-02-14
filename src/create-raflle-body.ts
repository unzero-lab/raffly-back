import { IsNotEmpty, Length } from 'class-validator';

export class createRaffleBody {
  @IsNotEmpty()
  @Length(5, 240)
  title: string; //preenchido pelo usuario
  deleted: boolean;
  deletedAt: Date;
  createdAt: Date;
  updateAt: Date;
  draw_date: Date;
  @IsNotEmpty()
  amount_number: number; // preenchido pelo usuario
  fk_provider_user_id: number;
  @IsNotEmpty()
  winning_number: number; // preenchido pelo usuario
  @IsNotEmpty()
  price_product: number; // preenchido pelo usuario
  @IsNotEmpty()
  description: string; // preenchido pelo usuario
}
