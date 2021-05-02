import { IsString, IsNotEmpty, IsHexColor } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateSubDocDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsHexColor()
    readonly color: string;
}

export class UpdateSubDocDto extends PartialType(CreateSubDocDto) {}
