import ACTIONS from '../actions';
import store from '../store';

const { initApp } = ACTIONS;

export const init = () => {
  store.dispatch(initApp());
};
