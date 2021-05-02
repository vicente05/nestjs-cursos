import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { GRUDMongoservice } from 'src/common/grudMongo.service';
import { FilterCategorysDto } from '../dtos/category.dto';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService extends GRUDMongoservice<Category> {
    table = 'Category';

    constructor(
        @InjectModel(Category.name)
        private _categoriaModel: Model<Category>,
    ) {
        super(_categoriaModel);
    }

    async findAll(params?: FilterCategorysDto): Promise<Category[]> {
        const filters: FilterQuery<Category> = {};
        let limits = { offset: undefined, limit: undefined };
        const { offset, limit, name } = params;
        if (params) {
            limits = { offset, limit };
        }
        if (name) {
            filters.name = { $regex: name };
        }
        return super.findAllPaginate(filters, limits);
    }
}
