import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateComentarioDto {
    @IsInt()
    id_evento: number;

    @IsString()
    comentario: string;

    @IsInt()
    @Min(1)
    @Max(5)
    classificacao: number;

    @IsString()
    nome_usuario: string;
}
