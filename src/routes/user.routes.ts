import { Router } from "express"
import { createUser, findAllUsers, deleteUser, findUserById } from "../controllers/user.controller"
import { validate } from "../middlewares/validate.middleware"
import { CreateUserDTO } from "../dtos/user.dto"

const router = Router()

router.post('/',validate(CreateUserDTO), createUser)
router.get('/', findAllUsers)
router.get('/:id', findUserById)
router.delete('/:id', deleteUser)
router.patch('/:id', validate(CreateUserDTO))

export default router