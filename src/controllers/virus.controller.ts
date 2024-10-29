import { createVirusService, findVirusByNameService, findVirusByIdService, findAllVirusesService, deleteVirusService, countVirusByName } from "../services/virus.service";
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

export const deleteVirus = async (req: Request, res: Response) => {
    try {
        await deleteVirusService(Number(req.params.id));
        return res.status(200).json({ msg: 'Virus deleted successfully!' });
    } catch (error) {
        return res.status(400).json({ error });
    }
}

export const countVirus = async (req: Request, res: Response) => {
    const { name } = req.params; // Supondo que o nome seja passado como parâmetro na URL
    try {
        const count = await countVirusByName(name);
        return res.status(200).json({ count });
    } catch (error) {
        return res.status(400).json({ error });
    }
}