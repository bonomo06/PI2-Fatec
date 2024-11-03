import { Router } from "express"
import { validate } from "../middlewares/validate.middleware"
import { createVirus, findAllViruses, findVirusById, deleteVirus, countVirus, createUserVirus } from "../controllers/virus.controller"
import { CreateVirusDTO } from "../dtos/virus.dto"

const router = Router()

router.post('/',validate(CreateVirusDTO), createVirus)
router.get('/', findAllViruses)
router.get('/:id', findVirusById)
router.delete('/:id', deleteVirus)
router.get('/count/:name', countVirus)
router.post('/user-virus', createUserVirus)

export default router