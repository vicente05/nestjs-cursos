import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dto';
import { ParseIntPipe } from 'src/pipes/parse-int.pipe';
import { CategoriesService } from '../services/categories.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
    constructor(private _categorieSerivce: CategoriesService) {}

    @Get()
    findAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
        return this._categorieSerivce.findAll();
    }

    @Get(':Idcategoria')
    findOne(@Param('Idcategoria', ParseIntPipe) Idcategoria: number) {
        return this._categorieSerivce.findOne(Idcategoria);
    }

    @Post()
    create(@Body() payload: CreateCategoryDto) {
        return this._categorieSerivce.create(payload);
    }

    @Put(':Idcategoria')
    update(@Param('Idcategoria') Idcategoria: number, @Body() payload: UpdateCategoryDto) {
        return this._categorieSerivce.update(+Idcategoria, payload);
    }

    @Delete(':Idcategoria')
    delete(@Param('Idcategoria') Idcategoria: number) {
        return this._categorieSerivce.remove(+Idcategoria);
    }

    @Get(':id/products/:productId')
    getCategorias(@Param('productId') productId: string, @Param('id') id: string) {
        return { msg: `product ${productId} and ${id}` };
    }
}
