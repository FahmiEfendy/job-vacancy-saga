import { createSelector } from 'reselect';

import { initialState } from './reducer';

const jobApplicationState = (state) => state.jobApplication || initialState;

export const selectJobApplication = createSelector(jobApplicationState, (state) => state.jobApplication);
