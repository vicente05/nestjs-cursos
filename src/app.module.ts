import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { BrandsController } from './controllers/brands.controller';
import { UsersController } from './controllers/users.controller';
import { OrdersController } from './controllers/orders.controller';
import { CustomersController } from './controllers/customers.controller';
import { ProductService } from './services/product.service';
import { BrandService } from './services/brand.service';
import { CategoriesService } from './services/categories.service';
import { UsersService } from './services/users.service';
import { CustomersService } from './services/customers.service';

@Module({
    imports: [],
    controllers: [
        AppController,
        ProductsController,
        CategoriesController,
        BrandsController,
        UsersController,
        OrdersController,
        CustomersController,
    ],
    providers: [AppService, ProductService, BrandService, CategoriesService, UsersService, CustomersService],
})
export class AppModule {}
