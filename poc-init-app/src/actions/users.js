import API from '../api/index';

const { fetchUsersWrapped } = API;

export const FETCH_PROFILES = 'FETCH_PROFILES';

export function fetchUsers() {
  const request = fetchUsersWrapped();

  return {
    type: FETCH_PROFILES,
    payload: request
  };
}
