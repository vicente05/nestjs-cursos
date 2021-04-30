import { Injectable } from '@nestjs/common';
import { GRUDservice } from 'src/common/grud.service';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class CustomersService extends GRUDservice<Customer> {
    items: Customer[] = [
        {
            id: 1,
            name: 'Nicolas',
            lastName: 'Molina',
            phone: '3111111212',
        },
    ];
}
