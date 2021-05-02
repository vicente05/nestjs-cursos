import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Products } from 'src/api/products/entities/product.entity';

import { Customer } from './customer.entity';

@Schema()
export class Order extends Document {
    @Prop({ type: Date })
    date: Date;

    @Prop({ type: Types.ObjectId, ref: Customer.name, required: true })
    customer: Customer | Types.ObjectId;

    @Prop({ type: [{ type: Types.ObjectId, ref: Products.name }] })
    products: Types.Array<Products>;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
