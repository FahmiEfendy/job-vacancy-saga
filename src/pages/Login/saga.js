import { takeLatest, call, put } from 'redux-saga/effects';
import { showPopup, setLoading } from '@containers/App/actions';
// import { login } from '@domain/api';
import { GET_LOGIN } from './constants';
import { getLogin } from '@domain/api';
import { setLogin } from './actions';

function* doLogin({ dataUser }) {
  yield put(setLoading(true));
  try {
    const response = yield call(getLogin(dataUser));
    yield put(setLogin(response));
    console.log(response, '<<< response login');
  } catch (error) {
    console.log(error.message);
  }
  yield put(setLoading(false));
}

export default function* loginSaga() {
  yield takeLatest(GET_LOGIN, doLogin);
}
