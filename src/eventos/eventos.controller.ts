import { Controller, Get, Post, Body } from '@nestjs/common';
import { EventosService } from './evnetos.service';
import { CreateEventoDto } from './dto/create-event.dto';

@Controller('eventos')
export class EventosController {
    constructor(private eventosService: EventosService) {}

    @Get()
    async findAll() {
        const { entities, raw } = await this.eventosService.findAll();
        return entities.map((evento, idx) => ({
            ...evento,
            media_classificacao: parseFloat(raw[idx].media_classificacao).toFixed(1),
        }));
    }


    @Post()
    create(@Body() createEventoDto: CreateEventoDto) {
        return this.eventosService.create(createEventoDto);
    }
}
