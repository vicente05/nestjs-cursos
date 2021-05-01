import { Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';

import { GRUDservice } from 'src/common/grud.service';
import { Order } from '../entities/order.entity';
import { User } from '../entities/user.entity';

import { ProductService } from 'src/api/products/services/product.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService extends GRUDservice<User> {
    items: User[] = [
        {
            id: 1,
            email: 'correo@mail.com',
            password: '12345',
            role: 'admin',
        },
    ];

    constructor(
        private _productService: ProductService,
        private _config: ConfigService,
        @Inject('MONGO') private database: Db,
    ) {
        super();
    }

    getOrdersByUser(id: number): Order {
        const user = super.findOne(id);
        return {
            date: new Date(),
            user,
            products: this._productService.findAll(),
        };
    }

    async getTasks(): Promise<any[]> {
        const tasksCollection = this.database.collection('tasks');
        const findTasks = await tasksCollection.find().toArray();
        return findTasks;
    }
}
