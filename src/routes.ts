import { Router } from 'express'
import UserController from './controllers/userController'

const routes: Router = Router()

routes.get('/', UserController.index)

export default routes
