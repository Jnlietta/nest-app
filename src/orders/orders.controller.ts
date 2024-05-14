import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDTO } from './dtos/order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  getAll(): any {
    return this.ordersService.getAll();
  }

  @Get('/:id')
  getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const order = this.ordersService.getById(id);
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  @Post('/')
  create(@Body() orderData: OrderDTO) {
    return this.ordersService.create(orderData);
  }

  @Put('/:id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() orderData: OrderDTO,
  ) {
    if (!this.ordersService.getById(id))
      throw new NotFoundException('Order not found');

    this.ordersService.updateById(id, orderData);
    return { success: true };
  }

  @Delete('/:id')
  public deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!this.ordersService.getById(id))
      throw new NotFoundException('Order not found');

    this.ordersService.deleteById(id);
    return { success: true };
  }
}
