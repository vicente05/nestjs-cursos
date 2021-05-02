import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from 'src/api/products/products.module';
import { CustomersController } from './controllers/customers.controller';
import { OrdersController } from './controllers/order.controller';
import { UsersController } from './controllers/users.controller';
import { Customer, CustomerSchema } from './entities/customer.entity';
import { Order, OrderSchema } from './entities/order.entity';
import { User, UserSchema } from './entities/user.entity';
import { CustomersService } from './services/customers.service';
import { OrderService } from './services/order.service';
import { UsersService } from './services/users.service';

@Module({
    imports: [
        ProductsModule,
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: Customer.name, schema: CustomerSchema },
            { name: Order.name, schema: OrderSchema },
        ]),
    ],
    controllers: [UsersController, CustomersController, OrdersController],
    providers: [UsersService, CustomersService, OrderService],
})
export class UsersModule {}
