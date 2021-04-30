import { Injectable } from '@nestjs/common';
import { ProductE } from 'src/entities/product.entity';
import { GRUDservice } from 'src/common/grud.service';

@Injectable()
export class ProductService extends GRUDservice<ProductE> {
    table = 'Product';
    items: ProductE[] = [
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
