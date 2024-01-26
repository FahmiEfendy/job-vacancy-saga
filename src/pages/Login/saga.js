import { takeLatest, call, put } from 'redux-saga/effects';
import { showPopup, setLoading } from '@containers/App/actions';
// import { login } from '@domain/api';
import { GET_LOGIN } from './constants';
import { getLogin } from '@domain/api';
import { setLogin } from './actions';

function* doLogin() {
  yield put(setLoading(true));
  try {
    const response = yield call(getLogin);
    yield put(setLogin(response.data));
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* loginSaga() {
  yield takeLatest(GET_LOGIN, doLogin);
}
