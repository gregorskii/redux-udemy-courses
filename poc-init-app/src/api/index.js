import * as UsersApi from './users';
import * as PhotosApi from './photos';

export default {
  ...UsersApi,
  ...PhotosApi
}
