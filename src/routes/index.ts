import { Router } from 'express'
import userRoutes from './user.routes'
import symptomRoutes from './symptoms.routes'

const router = Router()

router.use('/users',userRoutes)
router.use('/sintomas',symptomRoutes)

export default router