import {
    IsString,
    IsNumber,
    IsUrl,
    IsNotEmpty,
    IsPositive,
    IsOptional,
    Min,
    ValidateIf,
    ValidateNested,
    IsMongoId,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

import { CreateCategoryDto } from './category.dto';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly price: number;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly stock: number;

    @IsUrl()
    @IsNotEmpty()
    readonly image: string;

    @IsNotEmpty()
    @ValidateNested()
    readonly category: CreateCategoryDto;

    @IsMongoId()
    @IsNotEmpty()
    readonly brand: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class FilterProductsDto {
    @IsOptional()
    @IsPositive()
    readonly limit: number;

    @IsOptional()
    @Min(0)
    readonly offset: number;

    @IsOptional()
    @Min(1)
    readonly minPrice: number;

    @ValidateIf((params) => params.minPrice)
    @IsPositive()
    readonly maxPrice: number;
}
