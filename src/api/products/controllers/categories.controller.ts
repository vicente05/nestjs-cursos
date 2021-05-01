import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dto';
import { CategoriesService } from '../services/categories.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseBasic } from 'src/common/interface';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
    constructor(private _categorieSerivce: CategoriesService) {}

    @Get()
    async findAll(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
    ): Promise<ResponseBasic> {
        const categoris = await this._categorieSerivce.findAll();
        return { ok: true, categoris };
    }

    @Get(':Idcategoria')
    async findOne(@Param('Idcategoria') Idcategoria: string): Promise<ResponseBasic> {
        const categoris = await this._categorieSerivce.findOne(Idcategoria);
        return { ok: true, categoris };
    }

    @Post()
    async create(@Body() payload: CreateCategoryDto) {
        const categoris = await this._categorieSerivce.create(payload);
        return { ok: true, categoris };
    }

    @Put(':Idcategoria')
    async update(
        @Param('Idcategoria') Idcategoria: string,
        @Body() payload: UpdateCategoryDto,
    ): Promise<ResponseBasic> {
        const categoris = await this._categorieSerivce.update(Idcategoria, payload);
        return { ok: true, categoris };
    }

    @Delete(':Idcategoria')
    async delete(@Param('Idcategoria') Idcategoria: string): Promise<ResponseBasic> {
        const categoris = await this._categorieSerivce.remove(Idcategoria);
        return { ok: true, categoris };
    }

    @Get(':Idcategoria/products/:productId')
    async getCategorias(
        @Param('productId') productId: string,
        @Param('Idcategoria') Idcategoria: string,
    ): Promise<ResponseBasic> {
        return { ok: true, msg: `product ${productId} and ${Idcategoria}` };
    }
}
