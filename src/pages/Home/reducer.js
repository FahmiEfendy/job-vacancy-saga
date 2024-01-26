import { produce } from 'immer';

import { GET_JOB_FAILED, GET_JOB_REQUEST, GET_JOB_SUCCESS } from './constants';

export const initialState = {
  job: {
    data: [],
    isError: null,
  },
};

export const storedKey = ['job'];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_JOB_REQUEST:
        draft.job.isError = null;
        draft.job.data = [];
        break;

      case GET_JOB_SUCCESS:
        draft.job.isError = null;
        draft.job.data = action.data;
        break;

      case GET_JOB_FAILED:
        draft.job.isError = action.error;
        draft.job.data = [];
        break;

      default:
        break;
    }
  });

export default homeReducer;
