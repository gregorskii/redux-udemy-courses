export const APP_INIT = 'APP_INIT';

export const appInit = (initialState) => {
  return {
    type: APP_INIT,
    payload: initialState
  };
}
