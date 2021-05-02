import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    HttpStatus,
    HttpCode,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { CreateProductDto, FilterProductsDto, UpdateProductDto } from '../dtos/products.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ResponseBasic } from 'src/common/interface';
import { MongoIdPipe } from 'src/pipes/mongo-id.pipe';

@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductService) {}

    @Get()
    @ApiOperation({ summary: 'List of products' })
    async findAll(@Query() params: FilterProductsDto): Promise<ResponseBasic> {
        const products = await this.productService.getProductsFilter(params);
        return { ok: true, products };
    }

    @Get('filter')
    findFilter() {
        return { msg: `/products/filter` };
    }

    @Get(':productId')
    @HttpCode(HttpStatus.ACCEPTED)
    async findOne(@Param('productId', MongoIdPipe) productId: string): Promise<ResponseBasic> {
        const products = await this.productService.findOne(productId);
        return { ok: true, products };
    }

    @Post()
    async create(@Body() payload: CreateProductDto): Promise<ResponseBasic> {
        const products = await this.productService.create(payload);
        return { ok: true, products };
    }

    @Put(':productId')
    async update(
        @Param('productId', MongoIdPipe) id: string,
        @Body() payload: UpdateProductDto,
    ): Promise<ResponseBasic> {
        const products = await this.productService.update(id, payload);
        return { ok: true, products };
    }

    @Delete(':productId')
    async delete(@Param('productId', MongoIdPipe) id: string): Promise<ResponseBasic> {
        const products = await this.productService.remove(id);
        return { ok: true, products };
    }
}
