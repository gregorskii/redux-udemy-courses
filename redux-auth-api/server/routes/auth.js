import AuthController from '../controllers/auth';
import { requireLogin } from '../helpers/auth';

export default (app) => {
  app.post('/api/auth/signup', AuthController.signup);
  app.post('/api/auth/signin', requireLogin, AuthController.signin);
};
