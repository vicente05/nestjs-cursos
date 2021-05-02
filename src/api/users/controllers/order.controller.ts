import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResponseBasic } from 'src/common/interface';
import { MongoIdPipe } from 'src/pipes/mongo-id.pipe';
import { OrderService } from '../services/order.service';
import { CreateOrderDto, UpdateOrderDto, UpdateProductsToOrderDto } from '../dtos/order.dto';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
    constructor(private orderService: OrderService) {}

    @Get()
    async findAll(): Promise<ResponseBasic> {
        const orders = await this.orderService.findAll();
        return { ok: true, orders };
    }

    @Get(':idOrder')
    async get(@Param('idOrder', MongoIdPipe) idOrder: string): Promise<ResponseBasic> {
        const orders = await this.orderService.findOne(idOrder);
        return { ok: true, orders };
    }

    @Post()
    async create(@Body() payload: CreateOrderDto): Promise<ResponseBasic> {
        const orders = await this.orderService.create(payload);
        return { ok: true, orders };
    }

    @Put(':idOrder')
    async update(
        @Param('idOrder', MongoIdPipe) idOrder: string,
        @Body() payload: UpdateOrderDto,
    ): Promise<ResponseBasic> {
        const orders = await this.orderService.update(idOrder, payload);
        return { ok: true, orders };
    }

    @Put(':idOrder/products')
    async updateOrder(
        @Param('idOrder', MongoIdPipe) idOrder: string,
        @Body() payload: UpdateProductsToOrderDto,
    ): Promise<ResponseBasic> {
        const orders = await this.orderService.addProducts(idOrder, payload.productsIds);
        return { ok: true, orders };
    }

    @Delete(':idOrder')
    async remove(@Param('idOrder', MongoIdPipe) idOrder: string): Promise<ResponseBasic> {
        const orders = await this.orderService.remove(idOrder);
        return { ok: true, orders };
    }

    @Delete(':idOrder/product/:idProduct')
    async removeProduct(
        @Param('idOrder', MongoIdPipe) idOrder: string,
        @Param('idProduct', MongoIdPipe) idProduct: string,
    ): Promise<ResponseBasic> {
        const orders = await this.orderService.removeProducts(idOrder, idProduct);
        return { ok: true, orders };
    }
}
