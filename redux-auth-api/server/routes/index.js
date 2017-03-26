import auth from './auth';
import posts from './posts';

export default (app) => {
  app.get('/', (req, res) => res.send('OK'));
  auth(app);
  posts(app);
};
