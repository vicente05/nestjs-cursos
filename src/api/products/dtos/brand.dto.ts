import { IsString, IsUrl, IsNotEmpty, IsOptional, IsPositive, Min } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateBrandDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsUrl()
    @IsNotEmpty()
    readonly image: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

export class FilterBrandsDto {
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
