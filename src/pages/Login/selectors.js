import { createSelector } from 'reselect';
import { initialState } from '@containers/App/reducer';

const selectLoginState = (state) => state.login || initialState;

export const selectLogin = createSelector(selectLoginState, (state) => state.login);
