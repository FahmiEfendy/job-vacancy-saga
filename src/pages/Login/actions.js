import { SET_LOGIN, GET_LOGIN } from './constants';

export const setLogin = (dataUser) => ({
  type: SET_LOGIN,
  dataUser,
});

export const getLogin = (dataUser) => ({
  type: GET_LOGIN,
  dataUser,
});
