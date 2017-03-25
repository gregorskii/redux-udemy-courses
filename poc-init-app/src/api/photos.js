import axios from 'axios';

const BASE_API_URL = 'http://jsonplaceholder.typicode.com';

export const fetchPhotosWrapped = () => {
  return axios.get(`${BASE_API_URL}/photos`);
}
