import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongoClient } from 'mongodb';

import { config } from '../environments/config';

const API_KEY = '123456789';
const API_KEY_PROD = '213123456789';

@Global()
@Module({
    providers: [
        {
            provide: 'API_KEY',
            useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
        },
        {
            provide: 'MONGO',
            useFactory: async (_configService: ConfigType<typeof config>) => {
                const { connection, username, password, host, port, dbname } = _configService.mongo;
                const uri = `${connection}://${username}:${password}@${host}:${port}/?authSource=admin&readPreference=primary`;
                const client = new MongoClient(uri, { useUnifiedTopology: true });
                await client.connect();
                const database = client.db(dbname);
                return database;
            },
            inject: [config.KEY],
        },
    ],
    exports: ['API_KEY', 'MONGO'],
})
export class DatabaseModule {}
