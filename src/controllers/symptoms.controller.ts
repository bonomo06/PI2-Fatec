import { createSymptomService, findAllSymptomsService, deleteSymptomsService, findSymptomsByIdService, countSymptomOccurrencesService, createUserSymptomService } from '../services/symptoms.service';
import { Request, Response } from 'express';

export const createSymptom = async (req: Request, res: Response) => {
    try {
        const symptom = await createSymptomService(req.body);
        return res.status(201).json(symptom);
    } catch (error) {
        return res.status(400).json({ error });
    }
};

export const findAllSymptoms = async (req: Request, res: Response) => {
    const symptoms = await findAllSymptomsService();
    return res.status(200).json(symptoms);
};

export const findSymptomById = async (req: Request, res: Response) => {
    try {
        const symptom = await findSymptomsByIdService(Number(req.params.id));
        return res.status(200).json(symptom);
    } catch (error) {
        return res.status(400).json({ error });
    }
};

export const deleteSymptom = async (req: Request, res: Response) => {
    try {
        await deleteSymptomsService(Number(req.params.id));
        return res.status(200).json({ msg: 'Symptom deleted successfully!' });
    } catch (error) {
        return res.status(400).json({ error });
    }
};

export const createUserSymptom = async (req: Request, res: Response) => {
    try {
        const userSymptom = await createUserSymptomService(req.body);
        return res.status(201).json(userSymptom);
    } catch (error) {
        console.error("Erro ao associar sintoma a usuário:", error);
        return res.status(400).json({ error });
    }
};

export const countSymptomOccurrences = async (req: Request, res: Response) => {
    const sintomaId = Number(req.params.sintomaId);
    try {
        const count = await countSymptomOccurrencesService(sintomaId);
        return res.status(200).json({ count });
    } catch (error) {
        return res.status(400).json({ error: "Erro ao contar ocorrências do sintoma" });
    }
};