import { Controller, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  getAll(): any {
    return this.productsService.getAll();
  }

  @Get('/:id')
  public getById(@Param('id') id: string) {
    return this.productsService.getById(id);
  }

  @Delete('/:id')
  public deleteById(@Param('id') id: string) {
    this.productsService.deleteById(id);
    return { success: true };
  }
}
