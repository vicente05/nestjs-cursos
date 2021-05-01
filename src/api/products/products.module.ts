import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BrandsController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { BrandService } from './services/brand.service';
import { CategoriesService } from './services/categories.service';
import { ProductService } from './services/product.service';
// entities
import { ProductSchema, Products } from './entities/product.entity';
import { Brand, BrandSchema } from './entities/brand.entity';
import { Category, CategorySchema } from './entities/category.entity';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Products.name, schema: ProductSchema },
            { name: Brand.name, schema: BrandSchema },
            { name: Category.name, schema: CategorySchema },
        ]),
    ],
    controllers: [ProductsController, CategoriesController, BrandsController],
    providers: [ProductService, CategoriesService, BrandService],
    exports: [ProductService],
})
export class ProductsModule {}
