import {
  CREATE_JOB_APPLICATION_FAILED,
  CREATE_JOB_APPLICATION_REQUEST,
  CREATE_JOB_APPLICATION_SUCCESS,
  DELETE_JOB_FAILED,
  DELETE_JOB_REQUEST,
  DELETE_JOB_SUCCESS,
  GET_JOB_DETAIL_FAILED,
  GET_JOB_DETAIL_REQUEST,
  GET_JOB_DETAIL_SUCCESS,
} from './constants';

// GET Job Detail
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

// DELETE Job
export const deleteJobRequest = (payload) => ({
  type: DELETE_JOB_REQUEST,
  payload,
});

export const deleteJobSuccess = (data) => ({
  type: DELETE_JOB_SUCCESS,
  data,
});

export const deleteJobFailed = (error) => ({
  type: DELETE_JOB_FAILED,
  error,
});

// Create Application
export const createJobApplicationRequest = (payload) => ({
  type: CREATE_JOB_APPLICATION_REQUEST,
  payload,
});

export const createJobApplicationSuccess = (data) => ({
  type: CREATE_JOB_APPLICATION_SUCCESS,
  data,
});

export const createJobApplicationFailed = (error) => ({
  type: CREATE_JOB_APPLICATION_FAILED,
  error,
});
