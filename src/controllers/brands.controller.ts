import { Body, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from 'src/dto/brand.dto';
import { BrandService } from 'src/services/brand.service';

@Controller('brands')
export class BrandsController {
    constructor(private brandsService: BrandService) {}

    @Get()
    findAll() {
        return this.brandsService.findAll();
    }

    @Get(':id')
    get(@Param('id', ParseIntPipe) id: number) {
        return this.brandsService.findOne(id);
    }

    @Post()
    create(@Body() payload: CreateBrandDto) {
        return this.brandsService.create(payload);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateBrandDto) {
        return this.brandsService.update(id, payload);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.brandsService.remove(+id);
    }
}
