import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateCategoryDto, FilterCategorysDto, UpdateCategoryDto } from '../dtos/category.dto';
import { CategoriesService } from '../services/categories.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseBasic } from 'src/common/interface';
import { MongoIdPipe } from 'src/pipes/mongo-id.pipe';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
    constructor(private _categorieSerivce: CategoriesService) {}

    @Get()
    async findAll(@Query() params: FilterCategorysDto): Promise<ResponseBasic> {
        const categoris = await this._categorieSerivce.findAll(params);
        return { ok: true, categoris };
    }

    @Get(':Idcategoria')
    async findOne(@Param('Idcategoria', MongoIdPipe) Idcategoria: string): Promise<ResponseBasic> {
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
        @Param('Idcategoria', MongoIdPipe) Idcategoria: string,
        @Body() payload: UpdateCategoryDto,
    ): Promise<ResponseBasic> {
        const categoris = await this._categorieSerivce.update(Idcategoria, payload);
        return { ok: true, categoris };
    }

    @Delete(':Idcategoria')
    async delete(@Param('Idcategoria', MongoIdPipe) Idcategoria: string): Promise<ResponseBasic> {
        const categoris = await this._categorieSerivce.remove(Idcategoria);
        return { ok: true, categoris };
    }

    @Get(':Idcategoria/products/:productId')
    async getCategorias(
        @Param('productId', MongoIdPipe) productId: string,
        @Param('Idcategoria', MongoIdPipe) Idcategoria: string,
    ): Promise<ResponseBasic> {
        return { ok: true, msg: `product ${productId} and ${Idcategoria}` };
    }
}
