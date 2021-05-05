import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('user')
export class User {
    @PrimaryColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;
}
