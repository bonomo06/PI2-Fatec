import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateVirusDTO {
    @IsString()
    @IsNotEmpty({message: 'O campo name é obrigatório!'})
    @MinLength(3, { message: 'O campo name deve ter no mínimo 3 caracteres!' })
    name!: string
}