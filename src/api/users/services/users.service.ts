import { Injectable } from '@nestjs/common';

import { User } from '../entities/user.entity';

import { GRUDMongoservice } from 'src/common/grudMongo.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductService } from 'src/api/products/services/product.service';

@Injectable()
export class UsersService extends GRUDMongoservice<User> {
    table = 'User';
    constructor(
        @InjectModel(User.name)
        private _userModel: Model<User>,
        private _productService: ProductService,
    ) {
        super(_userModel);
    }

    async getOrdersByUser(id: any): Promise<any> {
        const user = await super.findOne(id);
        return {
            date: new Date(),
            user,
            products: await this._productService.findAll(),
        };
    }

    //async getTasks(): Promise<any[]> {
    //    const tasksCollection = this._userModel.modelName
    //    const findTasks = await tasksCollection.find().toArray();
    //    return findTasks;
    //}
}
