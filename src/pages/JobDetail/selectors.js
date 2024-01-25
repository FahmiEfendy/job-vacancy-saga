import { createSelector } from 'reselect';

import { initialState } from './reducer';

const jobDetailState = (state) => state.jobDetail || initialState;

export const selectJobDetail = createSelector(jobDetailState, (state) => state.jobDetail);
