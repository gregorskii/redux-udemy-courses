import API from 'src/api';

const { fetchUsersWrapped } = API;

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => {
  const request = fetchUsersWrapped();

  return {
    type: FETCH_USERS,
    payload: request
  };
};
