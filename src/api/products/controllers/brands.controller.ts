import { Body, Delete, Get, Param, Query, Post, Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResponseBasic } from 'src/common/interface';
import { MongoIdPipe } from 'src/pipes/mongo-id.pipe';
import { CreateBrandDto, FilterBrandsDto, UpdateBrandDto } from '../dtos/brand.dto';
import { BrandService } from '../services/brand.service';

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
    constructor(private brandsService: BrandService) {}

    @Get()
    async findAll(@Query() params: FilterBrandsDto): Promise<ResponseBasic> {
        const brands = await this.brandsService.findAll(params);
        return { ok: true, brands };
    }

    @Get(':idBrand')
    async get(@Param('idBrand', MongoIdPipe) idBrand: string): Promise<ResponseBasic> {
        const brands = await this.brandsService.findOne(idBrand);
        return { ok: true, brands };
    }

    @Post()
    async create(@Body() payload: CreateBrandDto): Promise<ResponseBasic> {
        const brands = await this.brandsService.create(payload);
        return { ok: true, brands };
    }

    @Put(':idBrand')
    async update(
        @Param('idBrand', MongoIdPipe) idBrand: string,
        @Body() payload: UpdateBrandDto,
    ): Promise<ResponseBasic> {
        const brands = await this.brandsService.update(idBrand, payload);
        return { ok: true, brands };
    }

    @Delete(':idBrand')
    async remove(@Param('idBrand', MongoIdPipe) idBrand: string): Promise<ResponseBasic> {
        const brands = await this.brandsService.remove(idBrand);
        return { ok: true, brands };
    }
}
