import { Injectable } from '@nestjs/common';
import { Model, FilterQuery } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from '../entities/product.entity';
import { GRUDMongoservice } from 'src/common/grudMongo.service';
import { FilterProductsDto } from '../dtos/products.dto';

@Injectable()
export class ProductService extends GRUDMongoservice<Products> {
    table = 'Product';
    constructor(
        @InjectModel(Products.name)
        private productModel: Model<Products>,
    ) {
        super(productModel);
    }

    async getProductsFilter(params?: FilterProductsDto): Promise<Products[]> {
        const filters: FilterQuery<Products> = {};
        const { offset, limit, minPrice, maxPrice } = params;
        if (minPrice && maxPrice) {
            filters.price = { $gte: minPrice, $lte: maxPrice };
        }
        return this.productModel.find(filters).populate('brand').skip(offset).limit(limit).exec();
    }
}
