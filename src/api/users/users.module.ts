import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from 'src/api/products/products.module';
import { CustomersController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';
import { Customer, CustomerSchema } from './entities/customer.entity';
import { User, UserSchema } from './entities/user.entity';
import { CustomersService } from './services/customers.service';
import { UsersService } from './services/users.service';

@Module({
    imports: [
        ProductsModule,
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: Customer.name, schema: CustomerSchema },
        ]),
    ],
    controllers: [UsersController, CustomersController],
    providers: [UsersService, CustomersService],
})
export class UsersModule {}
