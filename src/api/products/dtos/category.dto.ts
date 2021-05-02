import { IsString, IsNotEmpty, IsOptional, IsPositive, Min, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsUrl()
    @IsNotEmpty()
    readonly image: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}

export class FilterCategorysDto {
    @IsOptional()
    @IsPositive()
    readonly limit: number;

    @IsOptional()
    @Min(0)
    readonly offset: number;

    @IsOptional()
    @IsString()
    readonly name: string;
}
