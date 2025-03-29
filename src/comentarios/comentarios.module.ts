import { Module } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { ComentariosController } from './comentarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comentario } from './comentarios.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Comentario])],
    providers: [ComentariosService],
    controllers: [ComentariosController],
})
export class ComentariosModule {}
