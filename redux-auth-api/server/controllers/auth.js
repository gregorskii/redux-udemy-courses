import { logger } from '../interfaces';
import { UserModel } from '../models';
import { createTokenForUser } from '../helpers/auth';

class AuthController {
  static signup(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const query = UserModel.findOne({ email });

    query.exec()
      .then((existingUser) => {
        if (existingUser) {
          logger.info('user found');
          return res.status(422).send({ error: 'Email in use' });
        }

        const user = new UserModel({
          email,
          password
        });

        return user.save()
          .then(() => {
            res.send({
              token: createTokenForUser(user)
            });
          })
        ;
      })
      .catch((err) => {
        logger.error(err);
        if (err.name === 'ValidationError') {
          return res.status(422).send(
            { error: `You must provide a valid: ${Object.keys(err.errors).join(', ')}` }
          );
        }

        return res.send({ error: true });
      })
    ;
  }
}

export default AuthController;
