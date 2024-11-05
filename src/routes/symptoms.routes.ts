import { Router } from "express"
import { validate } from "../middlewares/validate.middleware"
import { createSymptom, findAllSymptoms, findSymptomById, deleteSymptom, countSymptomOccurrences, createUserSymptom } from "../controllers/symptoms.controller"
import { CreateSymptomDTO } from "../dtos/symptoms.dto"

const router = Router()

router.post('/',validate(CreateSymptomDTO), createSymptom)
router.get('/', findAllSymptoms)
router.get('/:id', findSymptomById)
router.delete('/:id', deleteSymptom)
router.get('/count/:sintomaId', countSymptomOccurrences)
router.post('/user-symptom', createUserSymptom)

export default router