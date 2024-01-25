import { produce } from 'immer';

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

export const initialState = {
  jobDetail: {
    data: [],
    isError: null,
  },
  deleteJob: {
    data: [],
    isError: null,
  },
  jobApplication: {
    data: [],
    isError: null,
  },
};

export const storedKey = ['job'];

const jobDetailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // GET Job Detail
      case GET_JOB_DETAIL_REQUEST:
        draft.jobDetail.isError = null;
        draft.jobDetail.data = [];
        break;

      case GET_JOB_DETAIL_SUCCESS:
        draft.jobDetail.isError = null;
        draft.jobDetail.data = action.data;
        break;

      case GET_JOB_DETAIL_FAILED:
        draft.jobDetail.isError = action.error;
        draft.jobDetail.data = [];
        break;

      // DELETE Job
      case DELETE_JOB_REQUEST:
        draft.deleteJob.isError = null;
        draft.deleteJob.data = [];
        break;

      case DELETE_JOB_SUCCESS:
        draft.deleteJob.isError = null;
        draft.deleteJob.data = action.data;
        break;

      case DELETE_JOB_FAILED:
        draft.deleteJob.isError = action.error;
        draft.deleteJob.data = [];
        break;

      case CREATE_JOB_APPLICATION_REQUEST:
        draft.jobApplication.isError = null;
        draft.jobApplication.data = [];
        break;

      case CREATE_JOB_APPLICATION_SUCCESS:
        draft.jobApplication.isError = null;
        draft.jobApplication.data = action.data;
        break;

      case CREATE_JOB_APPLICATION_FAILED:
        draft.jobApplication.isError = action.error;
        draft.jobApplication.data = [];
        break;

      default:
        break;
    }
  });

export default jobDetailReducer;
