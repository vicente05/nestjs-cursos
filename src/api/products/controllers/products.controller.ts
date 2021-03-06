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
    //ParseIntPipe,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ParseIntPipe } from 'src/pipes/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductService) {}

    @Get()
    @ApiOperation({ summary: 'List of products' })
    findAll(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        return this.productService.findAll();
    }

    @Get('filter')
    findFilter() {
        return { msg: `/products/filter` };
    }

    @Get(':productId')
    @HttpCode(HttpStatus.ACCEPTED)
    findOne(@Param('productId', ParseIntPipe) productId: number) {
        return this.productService.findOne(productId);
    }

    @Post()
    create(@Body() payload: CreateProductDto) {
        return this.productService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
        return this.productService.update(+id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productService.remove(+id);
    }
}
