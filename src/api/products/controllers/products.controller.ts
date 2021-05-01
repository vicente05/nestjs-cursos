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
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ResponseBasic } from 'src/common/interface';

@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductService) {}

    @Get()
    @ApiOperation({ summary: 'List of products' })
    async findAll(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ): Promise<ResponseBasic> {
        const products = await this.productService.findAll();
        return { ok: true, products };
    }

    @Get('filter')
    findFilter() {
        return { msg: `/products/filter` };
    }

    @Get(':productId')
    @HttpCode(HttpStatus.ACCEPTED)
    async findOne(@Param('productId') productId: string): Promise<ResponseBasic> {
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
        @Param('productId') id: string,
        @Body() payload: UpdateProductDto,
    ): Promise<ResponseBasic> {
        const products = await this.productService.update(id, payload);
        return { ok: true, products };
    }

    @Delete(':productId')
    async delete(@Param('productId') id: string): Promise<ResponseBasic> {
        const products = await this.productService.remove(id);
        return { ok: true, products };
    }
}
