import AuthController from '../controllers/auth';
import { requireLogin } from '../helpers/auth';

export default (app) => {
  app.post('/api/signup', AuthController.signup);
  app.post('/api/signin', requireLogin, AuthController.signin);
};
