import Virus from "../entities/virus.entity";
import { CreateVirusDTO } from "../dtos/virus.dto";
import { CreateUserVirusDTO } from "../dtos/user.virus.dto";
import { remove } from "remove-accents";
import Users from "../entities/user.entity";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createVirus = async (data: CreateVirusDTO) => {
    const normalizedName = remove(data.name.trim().toUpperCase().replace(/\s+/g, ''));

    return Virus.create({data: {
        name: normalizedName
        }
    });
}

export const findVirusByName = async (name: string) => {
    return Virus.findFirst({where: {name}})
}

export const createUserVirus = async (data: CreateUserVirusDTO) => {
    const virus = await Virus.findFirst({ where: { id: data.virusId } });
    if (!virus) {
        throw new Error('Sintoma não encontrado');
    }

    // Cria a associação entre o usuário e o sintoma na tabela de junção
    return Users.update({
        where: { id: data.userId },
        data: {
            userVirus: {
                create: {
                    virus: { connect: { id: data.virusId } }, // Conectando usando a relação
                },
            },
        },
    });
}

export const findVirusById = async (id: number) => {
    return Virus.findFirst({ where: { id } })
}

export const findAllViruses = async () => {
    return Virus.findMany()
}

export const deleteVirus = async (id: number) => {
    return Virus.delete({where: {id}})
}

export const countVirusOccurrences = async (virusId: number) => {
    return await prisma.user_virus.count({
        where: { virusId },
    });
};

export const getUserVirus = async (userId?: number) => {
    return await prisma.user_virus.findMany({where: userId ? { userId } : undefined,
        include: {
            user: true,
            virus: true,
        },
    });
};