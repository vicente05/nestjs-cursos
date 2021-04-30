import { Injectable } from '@nestjs/common';
import { GRUDservice } from 'src/common/grud.service';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoriesService extends GRUDservice<Category> {
    table = 'Category';
    items: Category[] = [
        {
            id: 1,
            name: 'Category 1',
        },
    ];
}
