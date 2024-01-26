import { createSelector } from 'reselect';
import { initialState } from '@containers/App/reducer';

const selectLoginState = (state) => {
  console.log(state.login, '<<< selector');
  return state.login || initialState;
};

export const selectLogin = createSelector(selectLoginState, (state) => state.login);
