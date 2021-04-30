import { Injectable } from '@nestjs/common';
import { GRUDservice } from 'src/common/grud.service';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService extends GRUDservice<User> {
    items: User[] = [
        {
            id: 1,
            email: 'correo@mail.com',
            password: '12345',
            role: 'admin',
        },
    ];
}
