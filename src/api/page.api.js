// eslint-disable-next-line import/no-cycle
import { API_ROOT } from './index';
import Request from './request';

const PATH = '/Pages';

const PageAPI = {
  get(id) {
    return Request.get(`${API_ROOT}${PATH}/${id}`);
  },
  all(filter) {
    return Request.get(`${API_ROOT}${PATH}`, {
      params: filter,
    });
  },
  remove(id) {
    return Request.delete(`${API_ROOT}${PATH}/${id}`);
  },
  create(data) {
    return Request.post(`${API_ROOT}${PATH}`, data);
  },
};

export default PageAPI;
