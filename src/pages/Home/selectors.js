import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectHomeState = (state) => state.home || initialState;

export const selectJob = createSelector(selectHomeState, (state) => state.job);
