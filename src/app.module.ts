import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { EnvConfiguration } from './config/app.config';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, load: [EnvConfiguration] }),
        DatabaseModule,
        AuthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
