import { Router } from 'express'
import userRoutes from './user.routes'
import symptomRoutes from './symptoms.routes'
import virusRoutes from './virus.routes'

const router = Router()

router.use('/users',userRoutes)
router.use('/sintomas',symptomRoutes)
router.use('/virus', virusRoutes)

export default router