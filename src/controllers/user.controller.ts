import { createUserService, findAllUsersService, deleteUserService, findUserByIdService } from '../services/user.service'
import { Request, Response } from 'express'

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await createUserService(req.body)
        return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({error})
    }
}

export const findAllUsers = async (req: Request, res: Response) => {
    const users = await findAllUsersService()
    return res.status(200).json(users)
}

export const findUserById = async (req: Request, res: Response) => {
    try {
        const user = await findUserByIdService(Number(req.params.id))
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({error})
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        await deleteUserService(Number(req.params.id))
        return res.status(200).json({msg: 'Usuário deletado com sucesso!'})
        //204 para sucesso vazio e 200 para sucesso com retorno
    } catch (error) {
        return res.status(400).json({error})
    }
}