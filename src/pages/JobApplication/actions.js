import {
  DELETE_JOB_APPLICATION_FAILED,
  DELETE_JOB_APPLICATION_REQUEST,
  DELETE_JOB_APPLICATION_SUCCESS,
  GET_JOB_APPLICATION_FAILED,
  GET_JOB_APPLICATION_REQUEST,
  GET_JOB_APPLICATION_SUCCESS,
} from './constans';

// GET Job Application
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

// DELETE Job Application
export const deleteJobApplicationRequest = (id) => ({
  type: DELETE_JOB_APPLICATION_REQUEST,
  id,
});

export const deleteJobApplicationSuccess = (data) => ({
  type: DELETE_JOB_APPLICATION_SUCCESS,
  data,
});

export const deleteJobApplicationFailed = (error) => ({
  type: DELETE_JOB_APPLICATION_FAILED,
  error,
});
