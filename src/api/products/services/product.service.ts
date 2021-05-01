import { Injectable } from '@nestjs/common';
import { Products } from '../entities/product.entity';
import { GRUDservice } from 'src/common/grud.service';

@Injectable()
export class ProductService extends GRUDservice<Products> {
    table = 'Product';
    items: Products[] = [
        {
            id: 1,
            name: 'prueba1',
            price: 21,
            description: 'lalala',
            stock: 12,
            image: 'lalala',
        },
    ];
}
