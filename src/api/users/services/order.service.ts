import { Injectable } from '@nestjs/common';

import { GRUDMongoservice } from 'src/common/grudMongo.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrderService extends GRUDMongoservice<Order> {
    table = 'Order';
    constructor(
        @InjectModel(Order.name)
        private _orderModel: Model<Order>,
    ) {
        super(_orderModel);
    }

    async findAll(): Promise<Order[]> {
        return await this._orderModel.find().populate('products').populate('customer').exec();
    }

    async removeProducts(id: string, productId: string): Promise<any> {
        const order = await this._orderModel.findById(id);
        order.products.pull(productId);
        return order.save();
    }

    async addProducts(id: string, productsIds: string[]) {
        const order = await this._orderModel.findById(id);
        productsIds.forEach((idProduct) => order.products.push(idProduct));
        return order.save();
    }
}
