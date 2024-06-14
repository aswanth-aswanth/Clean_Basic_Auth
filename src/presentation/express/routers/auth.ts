import { Router } from 'express';
import AuthenticateUserController from '../../../http/controllers/Authenticate/AuthenticateUserController';
import CreateUserController from '../../../http/controllers/User/CreateUserController';

const authRouter = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();

authRouter.post('/login', authenticateUserController.handle);
authRouter.post('/register', createUserController.handle);

export default authRouter;
