export const SIGN_IN = 'SIGN_IN';

export const signIn = (fields) => {
  console.log(fields);
  return {
    type: SIGN_IN,
    payload: []
  };
};
