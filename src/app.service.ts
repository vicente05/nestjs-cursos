import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { config } from './environments/config';
import { Db } from 'mongodb';

@Injectable()
export class AppService {
    constructor(
        @Inject(config.KEY) private _configSevice: ConfigType<typeof config>,
        @Inject('TASKS') private tasks: any[],
        @Inject('MONGO') private database: Db,
    ) {}

    getHello(): string {
        const apiKey = this._configSevice.apiKey;
        const db = this._configSevice.database.name;
        return `Hello World! ${apiKey} and ${db}`;
    }

    async getTasks() {
        const tasksCollection = this.database.collection('tasks');
        const findTasks = await tasksCollection.find().toArray();
        return findTasks;
    }
}
