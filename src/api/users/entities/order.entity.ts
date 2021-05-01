import { Products } from 'src/api/products/entities/product.entity';
import { User } from './user.entity';

export class Order {
    date: Date;
    user: User;
    products: Products[];
}
