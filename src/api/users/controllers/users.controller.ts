import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { UsersService } from '../services/users.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseBasic } from 'src/common/interface';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async findAll(): Promise<ResponseBasic> {
        const users = await this.usersService.findAll();
        return { ok: true, users };
    }

    //@Get('tasks')
    //findAllTasks() {
    //    return this.usersService.getTasks();
    //}

    @Get(':id')
    async get(@Param('idUser') idUser: string): Promise<ResponseBasic> {
        const users = await this.usersService.findOne(idUser);
        return { ok: true, users };
    }

    @Get(':idUser/orders')
    getOrders(@Param('idUser') idUser: string) {
        return this.usersService.getOrdersByUser(idUser);
    }

    @Post()
    async create(@Body() payload: CreateUserDto): Promise<ResponseBasic> {
        const users = await this.usersService.create(payload);
        return { ok: true, users };
    }

    @Put(':id')
    async update(
        @Param('idUser') idUser: string,
        @Body() payload: UpdateUserDto,
    ): Promise<ResponseBasic> {
        const users = await this.usersService.update(idUser, payload);
        return { ok: true, users };
    }

    @Delete(':id')
    async remove(@Param('idUser') idUser: string): Promise<ResponseBasic> {
        const users = await this.usersService.remove(idUser);
        return { ok: true, users };
    }
}
