import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GRUDMongoservice } from 'src/common/grudMongo.service';
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
}
