import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EventosModule } from './eventos/eventos.module';
import { ComentariosModule } from './comentarios/comentarios.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true, // Torna as configurações disponíveis globalmente
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DATABASE_HOST'),
                port: configService.get('DATABASE_PORT', 5432),
                username: configService.get('DATABASE_USERNAME'),
                password: configService.get('DATABASE_PASSWORD'),
                database: configService.get('DATABASE_NAME'),
                autoLoadEntities: true,
                ssl: {
                    rejectUnauthorized: false
                },
            }),
        }),
        EventosModule,
        ComentariosModule,
    ],
})
export class AppModule {}