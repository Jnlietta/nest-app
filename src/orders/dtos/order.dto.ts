import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length, IsUUID } from 'class-validator';

export class OrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  client: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  productId: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  address: string;
}
