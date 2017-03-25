import AuthController from '../controllers/auth';

export default (app) => {
  app.post('/api/signup', AuthController.signup);
};
