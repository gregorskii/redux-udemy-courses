export const CHANGE_AUTH = 'CHANGE_AUTH';

export const authenticate = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};
