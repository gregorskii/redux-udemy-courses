/* eslint-disable no-underscore-dangle, no-param-reassign */

import { Schema } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import { mongoose } from '../interfaces';
import schema from '../schemas/user';

// Define our model
const UserSchema = new Schema(schema, {
  toObject: {
    transform: (doc, ret) => {
      delete ret.__v;
      delete ret._id;
    }
  }
});

// on save hook encrypt password
UserSchema.pre('save', function onSave(next) {
  const user = this;

  // Generate a salt then run the callback
  bcrypt.genSalt(10, (saltErr, salt) => {
    if (saltErr) next(saltErr);

    // hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, (hashErr, hash) => {
      if (hashErr) next(hashErr);

      // Overwrite plaintext password with hashed
      user.password = hash;
      next();
    });
  });
});

// Create model class
const User = mongoose.model('user', UserSchema);

export default User;
