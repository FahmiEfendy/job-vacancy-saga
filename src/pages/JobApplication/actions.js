import { GET_JOB_APPLICATION_FAILED, GET_JOB_APPLICATION_REQUEST, GET_JOB_APPLICATION_SUCCESS } from './constans';

export const getJobApplicationRequest = (id) => ({
  type: GET_JOB_APPLICATION_REQUEST,
  id,
});

export const getJobApplicationSuccess = (data) => ({
  type: GET_JOB_APPLICATION_SUCCESS,
  data,
});

export const getJobApplicationFailed = (error) => ({
  type: GET_JOB_APPLICATION_FAILED,
  error,
});
