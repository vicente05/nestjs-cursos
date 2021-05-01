import { Module } from '@nestjs/common';
import { BrandsController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { BrandService } from './services/brand.service';
import { CategoriesService } from './services/categories.service';
import { ProductService } from './services/product.service';

@Module({
    controllers: [ProductsController, CategoriesController, BrandsController],
    providers: [ProductService, CategoriesService, BrandService],
    exports: [ProductService],
})
export class ProductsModule {}
