import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GRUDMongoservice } from 'src/common/grudMongo.service';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomersService extends GRUDMongoservice<Customer> {
    table = 'Customer';

    constructor(
        @InjectModel(Customer.name)
        private _customerModel: Model<Customer>,
    ) {
        super(_customerModel);
    }
}
