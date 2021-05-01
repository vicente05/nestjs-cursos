import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResponseBasic } from 'src/common/interface';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { CustomersService } from '../services/customers.service';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) {}

    @Get()
    async findAll(): Promise<ResponseBasic> {
        const customers = await this.customersService.findAll();
        return { ok: true, customers };
    }

    @Get(':id')
    async get(@Param('idCustomer') idCustomer: string): Promise<ResponseBasic> {
        const customers = await this.customersService.findOne(idCustomer);
        return { ok: true, customers };
    }

    @Post()
    async create(@Body() payload: CreateCustomerDto): Promise<ResponseBasic> {
        const customers = await this.customersService.create(payload);
        return { ok: true, customers };
    }

    @Put(':idCustomer')
    async update(
        @Param('idCustomer') idCustomer: string,
        @Body() payload: UpdateCustomerDto,
    ): Promise<ResponseBasic> {
        const customers = await this.customersService.update(idCustomer, payload);
        return { ok: true, customers };
    }

    @Delete(':idCustomer')
    async remove(@Param('idCustomer') idCustomer: string): Promise<ResponseBasic> {
        const customers = await this.customersService.remove(idCustomer);
        return { ok: true, customers };
    }
}
