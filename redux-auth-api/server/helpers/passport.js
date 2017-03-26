import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserModel } from '../models';

const JWT_SECRET = process.env.JWT_SECRET;

// Setup options for JWT strategy
const jwtOptions = {
  // Where to find JWT, authorization header
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: JWT_SECRET
};

// Create JWT strategy
const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  // See if the user id payload exists in our database
  const query = UserModel.findById(payload.sub);

  query.exec()
    .then((user) => {
      // Call done with user or call done with no user object
      if (user) done(null, user);
      return done(null, false);
    })
    .catch((err) => {
      // Error checking
      if (err) done(err, false);
    })
  ;
});

// Create local strategy
const localOptions = {
  usernameField: 'email'
};

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // Verify the email and password
  const query = UserModel.findOne({ email });

  query.exec()
    .then((user) => {
      if (!user) done(null, false);
      user.comparePassword(password, (err, isMatch) => {
        // Compare password, if valid return user, if not return false
        if (err) done(err);
        // this done returns the user to the current route handler
        if (isMatch) done(null, user);
        done(null, false);
      });
    })
    // Error checking
    .catch((err) => {
      done(err);
    })
  ;
});

// Tell passport to use these strategies
passport.use(jwtLogin);
passport.use(localLogin);

export default passport;
