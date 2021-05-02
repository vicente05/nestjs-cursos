import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { GRUDMongoservice } from 'src/common/grudMongo.service';
import { FilterBrandsDto } from '../dtos/brand.dto';
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

    async findAll(params?: FilterBrandsDto): Promise<Brand[]> {
        const filters: FilterQuery<Brand> = {};
        let limits = { offset: undefined, limit: undefined };
        const { offset, limit, name } = params;
        if (params) {
            limits = { offset, limit };
        }
        if (name) {
            filters.name = { $regex: name };
        }
        return await super.findAllPaginate(filters, limits);
    }
}
