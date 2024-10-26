import { createUser, findAllUsers, findUserByEmail, findUserById, deleteUser } from "../repositories/user.repository"
import { CreateUserDTO} from '../dtos/user.dto'

export const createUserService = async (data: CreateUserDTO) => {
    const user = await findUserByEmail(data.email)
    if(user) throw new Error('E-mail já cadastrado!')

    return await createUser(data);
}

export const findAllUsersService = async () => {
    return await findAllUsers()
}

export const findUserByIdService = async (id: number) => {
    return await findUserById(id)
}

export const deleteUserService = async (id: number) => {
    const user = await findUserById(id)

    if(!user) throw new Error('Usuário não encontrado!')

    return await deleteUser(id)
}