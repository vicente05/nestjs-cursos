import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { config } from './environments/config';

@Injectable()
export class AppService {
    constructor(
        @Inject(config.KEY) private _configSevice: ConfigType<typeof config>,
        @Inject('TASKS') private tasks: any[],
    ) {}

    getHello(): string {
        const apiKey = this._configSevice.apiKey;
        const db = this._configSevice.database.name;
        return `Hello World! ${apiKey} and ${db}`;
    }
}
