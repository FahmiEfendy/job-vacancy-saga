import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  register: '/users',
  login: '/users',

  getJob: '/job',
  getJobDetail: '/job',
  createJob: '/job',
  deleteJob: '/job',

  createJobApplication: '/application',
  getJobApplication: '/application',
  deleteJobApplication: '/application',
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
export const getJobDetail = (id) => callAPI(urls.getJobDetail, 'GET', {}, { jobId: id });
export const createJob = (data) => callAPI(urls.createJob, 'POST', {}, {}, data);
export const deleteJob = (id) => callAPI(`${urls.deleteJob}/${id}`, 'DELETE');

export const createJobApplication = (data) => callAPI(urls.createJobApplication, 'POST', {}, {}, data);
export const getJobApplication = (id) => callAPI(urls.getJobApplication, 'GET', {}, id);
export const deleteJobApplication = (id) => callAPI(`${urls.deleteJobApplication}/${id}`, 'DELETE');

export const register = (dataUser) => {
  return callAPI(urls.register, 'POST', {}, {}, dataUser);
};
export const getLogin = (dataUser) => {
  console.log(dataUser);
  return callAPI(urls.login, 'GET', {}, dataUser);
};
