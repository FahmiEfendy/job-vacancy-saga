import { GET_JOB_FAILED, GET_JOB_REQUEST, GET_JOB_SUCCESS } from './constants';

export const getJobRequest = () => ({
  type: GET_JOB_REQUEST,
});

export const getJobSuccess = (data) => ({
  type: GET_JOB_SUCCESS,
  data,
});

export const getJobFailed = (error) => ({
  type: GET_JOB_FAILED,
  error,
});
