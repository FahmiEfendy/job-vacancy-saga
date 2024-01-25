import {
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
