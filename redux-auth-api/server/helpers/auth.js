/* eslint-disable import/prefer-default-export */

import jwt from 'jwt-simple';
import passport from './passport';

const createTokenForUser = (user) => {
  return jwt.encode({
    // subject
    sub: user.id,
    // issued at
    iat: new Date().getTime()
  }, process.env.JWT_SECRET);
};

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

export { createTokenForUser, requireAuth, requireLogin };
