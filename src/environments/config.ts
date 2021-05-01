import { registerAs } from '@nestjs/config';

export const config = registerAs('config', () => {
    return {
        database: {
            name: process.env.DATABASE_NAME,
            port: process.env.DB_PORT,
        },
        apiKey: process.env.API_KEY,
    };
});
