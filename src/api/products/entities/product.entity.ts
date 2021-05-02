import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Brand } from './brand.entity';
import { Category, CategorySchema } from './category.entity';

@Schema()
export class Products extends Document {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop({ type: 'number', required: true, index: true })
    price: number;

    @Prop({ type: 'number', required: true })
    stock: number;

    @Prop({ required: true })
    image: string;

    @Prop({ type: CategorySchema })
    category: Category;

    @Prop({ type: Types.ObjectId, ref: Brand.name })
    brand: Brand | Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Products);
