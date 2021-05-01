import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const config = registerAs('config', () => {
    return {
        database: {
            name: process.env.DATABASE_NAME,
            port: process.env.DB_PORT,
        },
        apiKey: process.env.API_KEY,
        port: process.env.PORT,
    };
});

export const schema: any = {
    API_KEY: Joi.number().required(),
    DATABASE_NAME: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    PORT: Joi.number().required(),
};
