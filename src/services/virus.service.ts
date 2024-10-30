import { createVirus, findVirusByName, findVirusById, findAllViruses, deleteVirus } from "../repositories/virus.repository";
import { CreateVirusDTO } from '../dtos/virus.dto'
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