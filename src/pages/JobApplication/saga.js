import { call, put, takeLatest } from 'redux-saga/effects';

import { getJobApplication } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { GET_JOB_APPLICATION_REQUEST } from './constans';
import { getJobApplicationFailed, getJobApplicationSuccess } from './actions';

function* doGetApplication(action) {
  yield put(setLoading(true));

  try {
    const response = yield call(getJobApplication, action.id);

    yield put(getJobApplicationSuccess(response));
  } catch (err) {
    yield put(getJobApplicationFailed(action.error));
  }

  yield put(setLoading(false));
}

export default function* jobApplicationSaga() {
  yield takeLatest(GET_JOB_APPLICATION_REQUEST, doGetApplication);
}
