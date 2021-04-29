import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    findAll(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ): string {
        return `products limit=>${limit} offse=>${offset} brand=>${brand}`;
    }

    @Get('filter')
    getProductsFilter(): string {
        return `/products/filter`;
    }

    @Get(':productId')
    products(@Param('productId') productId: string): string {
        return `product ${productId}`;
    }
}
