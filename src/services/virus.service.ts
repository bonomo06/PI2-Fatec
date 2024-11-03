import { createVirus, findVirusByName, findVirusById, findAllViruses, deleteVirus, createUserVirus } from "../repositories/virus.repository";
import { CreateVirusDTO } from '../dtos/virus.dto'
import { CreateUserVirusDTO } from "../dtos/user.virus.dto";
import Virus from "../entities/virus.entity";

export const createVirusService = async (data: CreateVirusDTO) => {
    console.log("Dados recebidos para criar virus: ", data);
    return await createVirus(data);
}

export const findVirusByIdService = async (id: number) => {
    return await findVirusById(id)
}

export const findVirusByNameService = async (name: string) => {
    return await findVirusByName(name)
}

export const findAllVirusesService = async () => {
    return await findAllViruses()
}

export const createUserVirusService = async (data: CreateUserVirusDTO) => {
    try {
        console.log("Dados recebidos para criar associação entre usuário e sintoma: ", data);
        // Cria a associação entre o usuário e o sintoma
        return await createUserVirus(data);
    } catch (error) {
        console.error("Erro ao criar associação entre usuário e sintoma: ", error);
        throw new Error('Erro ao criar associação entre usuário e sintoma: ' + error);
    }
};

export const deleteVirusService = async (id: number) => {
    const virus = await findVirusById(id)

    if(!virus) throw new Error('Vírus não encontrado!')

    return await deleteVirus(id)
}

export const countVirusByName = async (name: string) => {
    const uppercasedName = name.toUpperCase(); // Normaliza o nome que será buscado
    return await Virus.count({
        where: {
            name: uppercasedName // Conta apenas sintomas que têm o nome normalizado
        }
    });
};