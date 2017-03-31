/* eslint-disable import/prefer-default-export */

import axios from 'axios';

const BASE_API_URL = process.env.API_URL;

export const getPostsWrapped = () => {
  return axios.get(`${BASE_API_URL}/api/posts`, {
    headers: { authorization: localStorage.getItem('auth_token') }
  });
};
