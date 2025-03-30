import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';

@Controller('comentarios')
export class ComentariosController {
    constructor(private comentariosService: ComentariosService) {
    }

    @Get(':id_evento')
    findByEvento(@Param('id_evento', ParseIntPipe) id_evento: number) {
        return this.comentariosService.findByEvento(id_evento);
    }

    @Get()
    findAll() {
        return this.comentariosService.findAll();
    }

    @Post()
    create(@Body() createComentarioDto: CreateComentarioDto) {
        return this.comentariosService.create(createComentarioDto);
    }
}