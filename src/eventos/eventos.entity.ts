import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comentario } from '../comentarios/comentarios.entity';

@Entity('eventos')
export class Evento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column({ type: 'date' })
    data: Date;

    @Column()
    duracao_qtd: number;

    @Column()
    duracao_tipo: string;

    @OneToMany(() => Comentario, comentario => comentario.evento)
    comentarios: Comentario[];
}
