import { Module, HttpModule, HttpService } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

import { enviroments, config } from './environments';
import { ApiModule } from './api/api.module';

@Module({
    imports: [
        ApiModule,
        HttpModule,
        DatabaseModule,
        ConfigModule.forRoot({
            envFilePath: enviroments[process.env.NODE_ENV] || '.env',
            isGlobal: true,
            load: [config],
        }),
        ApiModule,
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: 'TASKS',
            useFactory: async (http: HttpService) => {
                const tasks = await http
                    .get('https://jsonplaceholder.typicode.com/todos')
                    .toPromise();
                return tasks.data;
            },
            inject: [HttpService],
        },
    ],
})
export class AppModule {}
