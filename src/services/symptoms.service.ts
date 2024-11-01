import Sintomas from "../entities/symptoms.entity"
import { createSymptom, findAllSymptoms, findSymptomsById, deleteSymptoms, createUserSymptom } from "../repositories/symptoms.repository";
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

export const countSymptomsByName = async (name: string) => {
    const uppercasedName = name.toUpperCase(); // Normaliza o nome que será buscado
    return await Sintomas.count({
        where: {
            name: uppercasedName // Conta apenas sintomas que têm o nome normalizado
        }
    });
};