// eslint-disable-next-line import/no-cycle
import { API_ROOT } from './index';
// eslint-disable-next-line import/no-cycle
import Request from './request';
// eslint-disable-next-line import/no-cycle
import { AuthService } from '@/services/services.index';

const PATH = '/Pages';

const PageAPI = {
  get(id) {
    return Request.get(`${API_ROOT}${PATH}/${id}?filter={"include":["sections"]}`);
  },
  all() {
    return Request.get(`${API_ROOT}${PATH}?filter={"where":{"userId":"${AuthService.getUserId()}"}}`);
  },
  remove(id) {
    return Request.delete(`${API_ROOT}${PATH}/${id}`);
  },
  create(data) {
    return Request.post(`${API_ROOT}${PATH}/create-page`, data);
  },
};

export default PageAPI;
