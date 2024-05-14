import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from '../products/dtos/create-product.dto';
import { ParseUUIDPipe } from '@nestjs/common';
import { UpdateProductDTO } from './dtos/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  getAll(): any {
    return this.productsService.getAll();
  }

  @Get('/:id')
  public getById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.productsService.getById(id);
  }

  @Post('/')
  create(@Body() productData: CreateProductDTO) {
    return this.productsService.create(productData);
  }

  @Put('/:id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() productData: UpdateProductDTO,
  ) {
    this.productsService.updateById(id, productData);
    return { success: true };
  }

  @Delete('/:id')
  public deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    this.productsService.deleteById(id);
    return { success: true };
  }
}
