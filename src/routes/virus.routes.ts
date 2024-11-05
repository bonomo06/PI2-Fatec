import { Router } from "express"
import { validate } from "../middlewares/validate.middleware"
import { createVirus, findAllViruses, findVirusById, deleteVirus, countVirusOccurrences, createUserVirus, getUserVirusAssociations } from "../controllers/virus.controller"
import { CreateVirusDTO } from "../dtos/virus.dto"

const router = Router()

router.post('/',validate(CreateVirusDTO), createVirus)
router.get('/', findAllViruses)
router.get('/:id', findVirusById)
router.delete('/:id', deleteVirus)
router.get('/count/:virusId', countVirusOccurrences)
router.post('/user-virus', createUserVirus)
router.get('/get/user-virus', getUserVirusAssociations)

export default router