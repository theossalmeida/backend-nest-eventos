import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Evento } from '../eventos/eventos.entity';

@Entity('comentarios')
export class Comentario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comentario: string;

    @Column()
    classificacao: number;

    @Column()
    nome_usuario: string;

    @Column()
    id_evento: number;

    @ManyToOne(() => Evento, evento => evento.comentarios, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_evento' })
    evento: Evento;
}
