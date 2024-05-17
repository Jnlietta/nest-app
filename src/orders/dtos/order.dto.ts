import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class OrderDTO {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  clientId: string;
}
