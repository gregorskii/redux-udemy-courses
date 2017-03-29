/* eslint-disable import/prefer-default-export */

import axios from 'axios';

const BASE_API_URL = process.env.API_URL;

export const postSignInWrapped = (fields) => {
  return axios.post(`${BASE_API_URL}/api/auth/signin`, fields);
};

export const postSignUpWrapped = (fields) => {
  return axios.post(`${BASE_API_URL}/api/auth/signup`, fields);
};
