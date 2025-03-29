import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Evento } from './eventos.entity';
import { Repository } from 'typeorm';
import { CreateEventoDto } from './dto/create-evento.dto';

@Injectable()
export class EventosService {
    constructor(
        @InjectRepository(Evento)
        private eventosRepository: Repository<Evento>,
    ) {}

    findAll() {
        return this.eventosRepository
            .createQueryBuilder('evento')
            .leftJoinAndSelect('evento.comentarios', 'comentario')
            .loadRelationCountAndMap('evento.comentariosCount', 'evento.comentarios')
            .addSelect('AVG(comentario.classificacao)', 'media_classificacao')
            .groupBy('evento.id, comentario.id, comentario.comentario, comentario.classificacao, ' +
                'comentario.nome_usuario, comentario.id_evento')
            .getRawAndEntities();
    }

    create(createEventoDto: CreateEventoDto) {
        const evento = this.eventosRepository.create(createEventoDto);
        return this.eventosRepository.save(evento);
    }
}
