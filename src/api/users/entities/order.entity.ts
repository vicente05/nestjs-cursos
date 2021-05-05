import { Products } from 'src/api/products/entities/product.entity';
import { User } from './user.entity';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('order')
export class Order {
    @PrimaryColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    user: User;

    @Column()
    products: Products[];
}
