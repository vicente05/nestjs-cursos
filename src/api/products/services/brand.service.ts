import { Injectable } from '@nestjs/common';
import { GRUDservice } from 'src/common/grud.service';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandService extends GRUDservice<Brand> {
    table = 'Brands';
    items: Brand[] = [
        {
            id: 1,
            name: 'Brand 1',
            image: 'https://i.imgur.com/U4iGx1j.jpeg',
        },
    ];
}
