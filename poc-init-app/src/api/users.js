import axios from 'axios';

const BASE_API_URL = 'http://jsonplaceholder.typicode.com';

export const fetchUsersWrapped = () => {
  return axios.get(`${BASE_API_URL}/users`);
}
