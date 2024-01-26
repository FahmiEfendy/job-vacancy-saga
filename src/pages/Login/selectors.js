import { createSelector } from 'reselect';
import { initialState } from '@containers/App/reducer';

const selectLoginState = (state) => {
  console.log(state.dataUser, '<<< selector');
  return state.login || initialState;
};

export const selectLogin = createSelector(selectLoginState, (state) => state.login);
