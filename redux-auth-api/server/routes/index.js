import auth from './auth';

export default (app) => {
  app.get('/', (req, res) => res.send('OK'));
  auth(app);
};
