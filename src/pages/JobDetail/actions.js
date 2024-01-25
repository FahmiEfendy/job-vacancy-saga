import { GET_JOB_DETAIL_FAILED, GET_JOB_DETAIL_REQUEST, GET_JOB_DETAIL_SUCCESS } from './constants';

export const getJobDetailRequest = (id) => ({
  type: GET_JOB_DETAIL_REQUEST,
  id,
});

export const getJobDetailSuccess = (data) => ({
  type: GET_JOB_DETAIL_SUCCESS,
  data,
});

export const getJobDetailFailed = (error) => ({
  type: GET_JOB_DETAIL_FAILED,
  error,
});
