// eslint-disable-next-line import/no-cycle
import UserAccountAPI from './user-account.api';
// eslint-disable-next-line import/no-cycle
import PageAPI from './page.api';

const API_ROOT = process.env.VUE_APP_API_ROOT || window.location.origin;
// eslint-disable-next-line
export { 
  API_ROOT,
  UserAccountAPI,
  PageAPI,
};
