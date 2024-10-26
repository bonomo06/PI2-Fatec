import Sintomas from "../entities/symptoms.entity"
import { CreateSymptomDTO } from "../dtos/symptoms.dto"
import { remove } from "remove-accents";

export const createSymptom = async (data: CreateSymptomDTO) => {
    const normalizedName = remove(data.name.trim().toUpperCase().replace(/\s+/g, ''));

    return Sintomas.create({data: {
        name: normalizedName
        }
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