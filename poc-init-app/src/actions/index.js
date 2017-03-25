import * as AppInit from './app-init';
import * as AppConfig from './app-config';
import * as Users from './users';
import * as Photos from './photos';

export default {
  ...AppInit,
  ...AppConfig,
  ...Users,
  ...Photos
}
