import Sintomas from "../entities/symptoms.entity"
import { CreateSymptomDTO } from "../dtos/symptoms.dto"
import { remove } from "remove-accents";
import { CreateUserSymptomDTO } from "../dtos/user.symptom.dto";
import Users from "../entities/user.entity";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createSymptom = async (data: CreateSymptomDTO) => {
    const normalizedName = remove(data.name.trim().toUpperCase().replace(/\s+/g, ''));

    return Sintomas.create({data: {
        name: normalizedName
        }
    });
}

export const createUserSymptom = async (data: CreateUserSymptomDTO) => {
    const symptom = await Sintomas.findFirst({ where: { id: data.sintomaId } });
    if (!symptom) {
        throw new Error('Sintoma não encontrado');
    }

    // Cria a associação entre o usuário e o sintoma na tabela de junção
    return Users.update({
        where: { id: data.userId },
        data: {
            userSintomas: {
                create: {
                    sintoma: { connect: { id: data.sintomaId } }, // Conectando usando a relação
                },
            },
        },
    });
}

export const findAllSymptoms = async () => {
    return Sintomas.findMany()
}

export const findSymptomsById = async (id: number) => {
    return Sintomas.findFirst({ where: { id } })
}

export const deleteSymptoms = async (id: number) => {
    return Sintomas.delete({ where: { id } })
}

export const countSymptomOccurrences = async (sintomaId: number) => {
    return await prisma.user_sintomas.count({
        where: { sintomaId },
    });
};