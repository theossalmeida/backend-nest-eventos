import { Module } from '@nestjs/common';
import { EventosService } from './evnetos.service';
import { EventosController } from './eventos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from './eventos.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Evento])],
    providers: [EventosService],
    controllers: [EventosController],
    exports: [EventosService],
})
export class EventosModule {}
