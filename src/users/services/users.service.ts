import { Inject, Injectable } from '@nestjs/common';
import { GRUDservice } from 'src/common/grud.service';
import { Order } from '../entities/order.entity';
import { User } from '../entities/user.entity';

import { ProductService } from 'src/products/services/product.service';

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
        @Inject('API_KEY') private apiKey: string,
    ) {
        super();
        console.log(`Hello World! ${this.apiKey}`);
    }

    getOrdersByUser(id: number): Order {
        const user = super.findOne(id);
        return {
            date: new Date(),
            user,
            products: this._productService.findAll(),
        };
    }
}
