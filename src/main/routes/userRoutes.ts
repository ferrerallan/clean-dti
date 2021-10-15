
import { Router } from 'express'
import { AddUserController } from '../../presentation/controllers/AddUserController';

const routes = Router();
const addUserController = new AddUserController();

routes.post('/addUser', addUserController.handle);

export default routes;