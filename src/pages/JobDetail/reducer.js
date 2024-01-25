import { produce } from 'immer';

import { GET_JOB_DETAIL_FAILED, GET_JOB_DETAIL_REQUEST, GET_JOB_DETAIL_SUCCESS } from './constants';

export const initialState = {
  jobDetail: {
    data: [],
    isError: null,
  },
};

export const storedKey = ['job'];

const jobDetailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
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

      default:
        break;
    }
  });

export default jobDetailReducer;
