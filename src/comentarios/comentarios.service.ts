import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comentario } from './comentarios.entity';
import { CreateComentarioDto } from './dto/create-comentario.dto';

@Injectable()
export class ComentariosService {
    constructor(
        @InjectRepository(Comentario)
        private comentariosRepository: Repository<Comentario>,
    ) {}

    findByEvento(id_evento: number) {
        return this.comentariosRepository.find({
            where: { id_evento },
        });
    }

    create(createComentarioDto: CreateComentarioDto) {
        const comentario = this.comentariosRepository.create(createComentarioDto);
        return this.comentariosRepository.save(comentario);
    }
}
