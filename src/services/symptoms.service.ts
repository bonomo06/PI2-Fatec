import Sintomas from "../entities/symptoms.entity"
import { createSymptom, findAllSymptoms, findSymptomsById, deleteSymptoms } from "../repositories/symptoms.repository";
import { CreateSymptomDTO } from '../dtos/symptoms.dto';

export const createSymptomService = async (data: CreateSymptomDTO) => {
    console.log("Dados recebidos para criar sintoma: ", data);
    return await createSymptom(data);
};

export const findAllSymptomsService = async () => {
    return await findAllSymptoms();
};

export const findSymptomsByIdService = async (id: number) => {
    return await findSymptomsById(id);
};

export const deleteSymptomsService = async (id: number) => {
    const sintoma = await findSymptomsById(id);
    if (!sintoma) throw new Error('Sintoma não encontrado!');
    return await deleteSymptoms(id);
};

export const countSymptomsByName = async (name: string) => {
    const uppercasedName = name.toUpperCase(); // Normaliza o nome que será buscado
    return await Sintomas.count({
        where: {
            name: uppercasedName // Conta apenas sintomas que têm o nome normalizado
        }
    });
};