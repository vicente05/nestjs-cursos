import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Products extends Document {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop({ type: 'number', required: true })
    price: number;

    @Prop({ type: 'number', required: true })
    stock: number;

    @Prop({ required: true })
    image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Products);
