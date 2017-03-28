import API from 'api';

const { postSignInWrapped } = API;

export const SIGN_IN = 'SIGN_IN';

export const signIn = (fields) => {
  const request = postSignInWrapped(fields);

  return {
    type: SIGN_IN,
    payload: request
  };
};
