import { NotFoundException } from '@nestjs/common';

export abstract class GRUDservice<T extends { id: number }> {
    public table: string;
    public items: T[] = [];
    private counterId = 1;

    findAll() {
        return this.items;
    }

    findOne(id: number) {
        const category = this.items.find((item) => item.id === id);
        if (!category) {
            throw new NotFoundException(`${this.table} #${id} not found`);
        }
        return category;
    }

    create(data: any) {
        this.counterId = this.counterId + 1;
        const newCategory = {
            id: this.counterId,
            ...data,
        };
        this.items.push(newCategory);
        return newCategory;
    }

    update(id: number, changes: any) {
        const category = this.findOne(id);
        const index = this.items.findIndex((item) => item.id === id);
        this.items[index] = {
            ...category,
            ...changes,
        };
        return this.items[index];
    }

    remove(id: number) {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new NotFoundException(`${this.table} #${id} not found`);
        }
        this.items.splice(index, 1);
        return true;
    }
}
