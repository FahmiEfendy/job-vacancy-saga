import { takeLatest, call, put } from 'redux-saga/effects';

import { getLogin } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { GET_LOGIN } from './constants';
import { setLogin } from './actions';

function* doLogin({ dataUser }) {
  yield put(setLoading(true));

  try {
    const response = yield call(getLogin, dataUser);
    yield put(setLogin(response[0]));
  } catch (error) {
    console.log(error.message, '<<< doLogin() Error');
  }

  yield put(setLoading(false));
}

export default function* loginSaga() {
  yield takeLatest(GET_LOGIN, doLogin);
}
