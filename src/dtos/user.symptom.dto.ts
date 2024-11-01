import { IsNotEmpty, IsInt } from "class-validator";

export class CreateUserSymptomDTO {
    @IsInt()
    @IsNotEmpty({ message: 'O campo userId é obrigatório!' })
    userId!: number;

    @IsInt()
    @IsNotEmpty({ message: 'O campo sintomaId é obrigatório!' })
    sintomaId!: number;
}