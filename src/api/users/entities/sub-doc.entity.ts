import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class SubDoc {
    @Prop()
    name: string;

    @Prop()
    color: string;
}

export const SubDocSchema = SchemaFactory.createForClass(SubDoc);
