import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    @Get(':id/products/:productId')
    getCategorias(
        @Param('productId') productId: string,
        @Param('id') id: string,
    ): string {
        return `product ${productId} and ${id}`;
    }
}
