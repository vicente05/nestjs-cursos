import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const config = registerAs('config', () => {
    return {
        database: {
            name: process.env.DATABASE_NAME,
            port: process.env.DB_PORT,
        },
        mongo: {
            dbName: process.env.MONGO_DB,
            port: parseInt(process.env.MONGO_PORT, 10),
            username: process.env.MONGO_INITDB_ROOT_USERNAME,
            password: process.env.MONGO_INITDB_ROOT_PASSWORD,
            host: process.env.MONGO_HOST,
            connection: process.env.MONGO_CONNECTION,
        },
        apiKey: process.env.API_KEY,
        port: process.env.PORT,
    };
});

export const schema: any = {
    API_KEY: Joi.number().required(),
    MONGO_DB: Joi.string().required(),
    MONGO_PORT: Joi.number().required(),
    PORT: Joi.number().required(),
    MONGO_INITDB_ROOT_USERNAME: Joi.string().required(),
    MONGO_INITDB_ROOT_PASSWORD: Joi.string().required(),
    MONGO_HOST: Joi.string().required(),
    MONGO_CONNECTION: Joi.string().required(),
    DATABASE_NAME: Joi.string().required(),
    DB_PORT: Joi.number().required(),
};
