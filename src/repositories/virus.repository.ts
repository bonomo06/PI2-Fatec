import Virus from "../entities/virus.entity";
import { CreateVirusDTO } from "../dtos/virus.dto";
import { remove } from "remove-accents";

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

export const findVirusById = async (id: number) => {
    return Virus.findFirst({ where: { id } })
}

export const findAllViruses = async () => {
    return Virus.findMany()
}

export const deleteVirus = async (id: number) => {
    return Virus.delete({where: {id}})
}