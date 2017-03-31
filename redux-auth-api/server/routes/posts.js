import { requireAuth } from '../helpers/auth';

export default (app) => {
  app.get('/api/posts', requireAuth, (req, res) => {
    res.send({ posts: [
      'one post',
      'two post',
      'three post',
      'four'
    ] });
  });
};
