import { produce } from 'immer';
import {
  DELETE_JOB_APPLICATION_FAILED,
  DELETE_JOB_APPLICATION_REQUEST,
  DELETE_JOB_APPLICATION_SUCCESS,
  GET_JOB_APPLICATION_FAILED,
  GET_JOB_APPLICATION_REQUEST,
  GET_JOB_APPLICATION_SUCCESS,
} from './constans';

export const initialState = {
  jobApplication: {
    data: [],
    isError: null,
  },
  deleteJobApplication: {
    data: [],
    isError: null,
  },
};

export const storedKey = ['jobApplication'];

const jobApplicationReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // GET Job Application
      case GET_JOB_APPLICATION_REQUEST:
        draft.jobApplication.isError = null;
        draft.jobApplication.data = [];
        break;

      case GET_JOB_APPLICATION_SUCCESS:
        draft.jobApplication.isError = null;
        draft.jobApplication.data = action.data;
        break;

      case GET_JOB_APPLICATION_FAILED:
        draft.jobApplication.isError = action.error;
        draft.jobApplication.data = [];
        break;

      // DELETE Job Application
      case DELETE_JOB_APPLICATION_REQUEST:
        draft.deleteJobApplication.isError = null;
        draft.deleteJobApplication.data = [];
        break;

      case DELETE_JOB_APPLICATION_SUCCESS:
        draft.deleteJobApplication.isError = null;
        draft.deleteJobApplication.data = action.data;
        break;

      case DELETE_JOB_APPLICATION_FAILED:
        draft.deleteJobApplication.isError = action.error;
        draft.deleteJobApplication.data = [];
        break;

      default:
        break;
    }
  });

export default jobApplicationReducer;
