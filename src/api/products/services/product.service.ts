import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from '../entities/product.entity';
import { GRUDMongoservice } from 'src/common/grudMongo.service';

@Injectable()
export class ProductService extends GRUDMongoservice<Products> {
    table = 'Product';
    constructor(
        @InjectModel(Products.name)
        private productModel: Model<Products>,
    ) {
        super(productModel);
    }
}
