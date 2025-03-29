import { IsString, IsDateString, IsInt } from 'class-validator';

export class CreateEventoDto {
    @IsString()
    nome: string;

    @IsDateString()
    data: string;

    @IsInt()
    duracao_qtd: number;

    @IsString()
    duracao_tipo: string;
}
