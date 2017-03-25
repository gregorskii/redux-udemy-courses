import querystring from 'querystring';

const API_KEY = 'gregapptest3';
export const API_URL_BASE = `http://reduxblog.herokuapp.com/api`;

export const urlQuery = querystring.stringify({
  key: API_KEY
});
