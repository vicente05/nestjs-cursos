/* eslint-disable @typescript-eslint/no-empty-function */
import { NotFoundException } from '@nestjs/common';
import { Document } from 'mongoose';
import { Model } from 'mongoose';

export abstract class GRUDMongoservice<T extends Document> {
    public table: string;

    constructor(protected readonly repository: Model<T>) {}

    async findAll(): Promise<T[]> {
        return await this.repository.find();
    }

    async findOne(id: any): Promise<T> {
        const findOne: T = await this.repository.findById(id);
        if (!findOne) {
            throw new NotFoundException(`${this.table} #${id} not found`);
        }
        return findOne;
    }

    async create(data: any): Promise<T> {
        const docInst = new this.repository(data);
        const createInst: T = await docInst.save();
        if (!createInst) {
            throw new NotFoundException(`${this.table} create not found`);
        }
        return createInst;
    }

    async update(id: any, changes: any) {
        const findOne: T = await this.findOne(id);
        const updateEntity = await this.repository.findByIdAndUpdate(findOne.id, changes);
        if (!updateEntity) {
            throw new NotFoundException(`${this.table} update not found`);
        }
        return updateEntity;
    }

    async remove(id: any): Promise<T> {
        const findOne: T = await this.findOne(id);
        const { deletedCount } = await this.repository.remove(findOne);
        if (deletedCount === 0) {
            throw new NotFoundException(`${this.table} delete not found`);
        }
        return findOne;
    }
}
