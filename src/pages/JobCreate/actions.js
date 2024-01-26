import { CREATE_JOB_FAILED, CREATE_JOB_REQUEST, CREATE_JOB_SUCCESS } from './constans';

export const createJobRequest = (payload) => ({
  type: CREATE_JOB_REQUEST,
  payload,
});

export const createJobSuccess = (data) => ({
  type: CREATE_JOB_SUCCESS,
  data,
});

export const createJobFailed = (error) => ({
  type: CREATE_JOB_FAILED,
  error,
});
