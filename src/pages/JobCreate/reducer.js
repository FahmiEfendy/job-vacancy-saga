import { produce } from 'immer';

import { CREATE_JOB_FAILED, CREATE_JOB_REQUEST, CREATE_JOB_SUCCESS } from './constans';

export const initialState = {
  createJob: {
    data: [],
    isError: null,
  },
};

export const storedKey = [''];

const createJobReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CREATE_JOB_REQUEST:
        draft.createJob.isError = null;
        draft.createJob.data = [];
        break;

      case CREATE_JOB_SUCCESS:
        draft.createJob.isError = null;
        draft.createJob.data = action.data;
        break;

      case CREATE_JOB_FAILED:
        draft.createJob.isError = action.error;
        draft.createJob.data = [];
        break;

      default:
        break;
    }
  });

export default createJobReducer;
