import { OmitType, PartialType } from '@nestjs/swagger';
import { IsArray, IsDate, IsMongoId, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
    @IsNotEmpty()
    @IsMongoId()
    readonly customer: string;

    @IsDate()
    @IsNotEmpty()
    readonly date: Date;

    @IsArray()
    @IsNotEmpty()
    readonly products: string[];
}

export class UpdateOrderDto extends PartialType(OmitType(CreateOrderDto, ['products'])) {}

export class UpdateProductsToOrderDto {
    @IsArray()
    @IsNotEmpty()
    readonly productsIds: string[];
}
