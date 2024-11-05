import Sintomas from "../entities/symptoms.entity"
import Users from "../entities/user.entity";
import { createSymptom, findAllSymptoms, findSymptomsById, deleteSymptoms, createUserSymptom, countSymptomOccurrences } from "../repositories/symptoms.repository";
import { CreateSymptomDTO } from '../dtos/symptoms.dto';
import { CreateUserSymptomDTO } from "../dtos/user.symptom.dto";

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

export const createUserSymptomService = async (data: CreateUserSymptomDTO) => {
    try {
        console.log("Dados recebidos para criar associação entre usuário e sintoma: ", data);
        // Cria a associação entre o usuário e o sintoma
        return await createUserSymptom(data);
    } catch (error) {
        console.error("Erro ao criar associação entre usuário e sintoma: ", error);
        throw new Error('Erro ao criar associação entre usuário e sintoma: ' + error);
    }
};

export const countSymptomOccurrencesService = async (sintomaId: number) => {
    return await countSymptomOccurrences(sintomaId);
};

// export const countSymptomsById = async (symptomId: number) => {
//     const symptoms = await findAllSymptoms();
//     return symptoms.filter(symptom => symptom.id === symptomId).length;
// };