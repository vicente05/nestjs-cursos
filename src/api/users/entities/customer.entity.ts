import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('customer')
export class Customer {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    phone: string;
}
