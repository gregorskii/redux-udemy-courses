import axios from 'axios';
import { API_URL_BASE, urlQuery } from '../config/api';

export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => {
  const request = axios.get(`${API_URL_BASE}/posts/?${urlQuery}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
};

export const CREATE_POST = 'CREATE_POST';

export const createPost = (fields) => {
  const request = axios.post(`${API_URL_BASE}/posts/?${urlQuery}`, fields);

  return {
    type: CREATE_POST,
    payload: request
  };
};

export const GET_POST = 'GET_POST';

export const getPost = (id) => {
  const request = axios.get(`${API_URL_BASE}/posts/${id}?${urlQuery}`);

  return {
    type: GET_POST,
    payload: request
  };
};

export const DELETE_POST = 'DELETE_POST';

export const deletePost = (id) => {
  const request = axios.delete(`${API_URL_BASE}/posts/${id}?${urlQuery}`);

  return {
    type: DELETE_POST,
    payload: request
  };
}
