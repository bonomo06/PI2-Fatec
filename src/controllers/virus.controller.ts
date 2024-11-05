import { createVirusService, findVirusByNameService, findVirusByIdService, findAllVirusesService, deleteVirusService, countVirusOccurrencesService, createUserVirusService, getUserVirusService } from "../services/virus.service";
import { Request, Response } from 'express'

export const createVirus = async (req: Request, res: Response) => {
    try {
        const virus = await createVirusService(req.body);
        return res.status(201).json(virus);
    } catch (error) {
        return res.status(400).json({ error });
    }
}

export const findVirusByName = async (req: Request, res: Response) => {
    try {
        const virus = await findVirusByNameService(req.params.name);
        return res.status(200).json(virus);
    } catch (error) {
        return res.status(400).json({ error });
    }
}

export const findAllViruses = async (req: Request, res: Response) => {
    const viruses = await findAllVirusesService();
    return res.status(200).json(viruses);
}

export const findVirusById = async (req: Request, res: Response) => {
    try {
        const virus = await findVirusByIdService(Number(req.params.id));
        return res.status(200).json(virus);
    } catch (error) {
        return res.status(400).json({ error });
    }
}

export const createUserVirus = async (req: Request, res: Response) => {
    try {
        const userVirus = await createUserVirusService(req.body);
        return res.status(201).json(userVirus);
    } catch (error) {
        console.error("Erro ao associar virus a usuário:", error);
        return res.status(400).json({ error });
    }
};

export const deleteVirus = async (req: Request, res: Response) => {
    try {
        await deleteVirusService(Number(req.params.id));
        return res.status(200).json({ msg: 'Virus deleted successfully!' });
    } catch (error) {
        return res.status(400).json({ error });
    }
}

export const countVirusOccurrences = async (req: Request, res: Response) => {
    const virusId = Number(req.params.virusId);
    try {
        const count = await countVirusOccurrencesService(virusId);
        return res.status(200).json({ count });
    } catch (error) {
        return res.status(400).json({ error: "Erro ao contar ocorrências do virus" });
    }
};

export const getUserVirusAssociations = async (req: Request, res: Response) => {
    try {
        const userId = req.query.userId ? Number(req.query.userId) : undefined;
        const associations = await getUserVirusService(userId);
        return res.status(200).json(associations);
    } catch (error) {
        console.error("Erro ao buscar associações entre usuário e virus:", error);
        return res.status(500).json({ error: 'Erro ao buscar associações' });
    }
};