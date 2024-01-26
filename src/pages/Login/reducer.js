import { produce } from 'immer';

import { SET_LOGIN } from './constants';

export const initialState = {
  login: {},
};

export const storedKey = ['login'];

const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOGIN:
        console.log(action, '<<<< REDUCER');
        draft.login = action.login;
        break;
    }
  });

export default loginReducer;
