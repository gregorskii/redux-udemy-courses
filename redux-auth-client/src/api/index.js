import * as AuthApi from './auth';
import * as PostsApi from './posts';

export default {
  ...AuthApi,
  ...PostsApi
};
