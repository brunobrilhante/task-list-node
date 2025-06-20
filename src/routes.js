import { Router } from 'express';

import authMiddleware from './app/middlewares/auth'

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

//Todas rotas abaixo desse middleware precisam estar autenticadas
routes.use(authMiddleware);

routes.put('/users', UserController.update);



export default routes;
