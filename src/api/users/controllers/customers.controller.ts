import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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
    async get(@Param('id', ParseIntPipe) id: number): Promise<ResponseBasic> {
        const customers = await this.customersService.findOne(id);
        return { ok: true, customers };
    }

    @Post()
    async create(@Body() payload: CreateCustomerDto): Promise<ResponseBasic> {
        const customers = await this.customersService.create(payload);
        return { ok: true, customers };
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateCustomerDto,
    ): Promise<ResponseBasic> {
        const customers = await this.customersService.update(id, payload);
        return { ok: true, customers };
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number): Promise<ResponseBasic> {
        const customers = await this.customersService.remove(+id);
        return { ok: true, customers };
    }
}
