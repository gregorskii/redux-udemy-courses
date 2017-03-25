import store from '../store';
import ACTIONS from '../actions';

const { fetchUsers } = ACTIONS;

export default () => {
  store.dispatch(fetchUsers());
};
