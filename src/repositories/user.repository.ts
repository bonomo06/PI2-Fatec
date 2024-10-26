import User from '../entities/user.entity'
import { CreateUserDTO} from '../dtos/user.dto'

export const createUser = async (data: CreateUserDTO) => {
    return User.create({data})
}

export const findUserByEmail = async (email: string) => {
    return User.findFirst({where: {email}})
}

export const findAllUsers = async () => {
    return User.findMany()
}

export const deleteUser = async (id: number) => {
    return User.delete({where: {id}})
}

export const findUserById = async (id: number) => {
    return User.findFirst({where: {id}})
}