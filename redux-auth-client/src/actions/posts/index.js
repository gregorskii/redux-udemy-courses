import API from 'api';

const {
  getPostsWrapped
} = API;

export const GET_POSTS = 'GET_POSTS';

export const getPosts = () => {
  const request = getPostsWrapped();

  return {
    type: GET_POSTS,
    payload: request
  };
};
