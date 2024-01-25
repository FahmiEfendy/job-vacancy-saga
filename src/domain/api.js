import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  getJob: '/job',
  getJobDetail: '/job',
  createJob: '/job',
  deleteJob: '/job',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const ping = () => callAPI(urls.ping, 'get');

export const getJob = () => callAPI(urls.getJob, 'GET');
export const getJobDetail = (id) => callAPI(`${urls.getJobDetail}/${id}`, 'GET');
export const createJob = (data) => callAPI(urls.createJob, 'POST', {}, {}, data);
export const deleteJob = (id) => callAPI(`${urls.deleteJob}/${id}`, 'DELETE');
