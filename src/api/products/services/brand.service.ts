import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GRUDMongoservice } from 'src/common/grudMongo.service';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandService extends GRUDMongoservice<Brand> {
    table = 'Brands';
    constructor(
        @InjectModel(Brand.name)
        private _brandModel: Model<Brand>,
    ) {
        super(_brandModel);
    }
}
