import { produce } from 'immer';
import { GET_JOB_APPLICATION_FAILED, GET_JOB_APPLICATION_REQUEST, GET_JOB_APPLICATION_SUCCESS } from './constans';

export const initialState = {
  jobApplication: {
    data: [],
    isError: null,
  },
};

export const storedKey = ['jobApplication'];

const jobApplicationReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
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

      default:
        break;
    }
  });

export default jobApplicationReducer;
