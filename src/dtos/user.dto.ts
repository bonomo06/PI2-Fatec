import { IsEmail, IsEmpty, IsNotEmpty, IsOptional, IsString, min, minLength, MinLength } from "class-validator";

export enum Symptoms {
    DorOlhos = 'Dor nos olhos',
    Febre = 'Febre',
    DorCorpo = 'Dor no corpo',
    Manchas = 'Manchas vermelhas',
    DorCabeca = 'Dor de cabeça',
    Enjoo = 'Enjoo',
    Tontura = 'Tontura',
    Diarreia = 'Diarreia',
    Vomito = 'Vômito',
    Sangramentos = 'Sangramentos',
    Fadiga = 'Fadiga',
    PerdaApetite = 'Perda de apetite',
    DorAbdomen = 'Dor no abdômen',
}

// Enum para os tipos de vírus possíveis
export enum VirusType {
    DENV1 = 'DENV-1',
    DENV2 = 'DENV-2',
    DENV3 = 'DENV-3',
    DENV4 = 'DENV-4',
}

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty({message: 'O campo name é obrigatório!'})
    @MinLength(3, {message: 'O campo name deve ter no mínimo 3 caracteres!'})
    name!: string

    @IsEmail()
    email!: string
}