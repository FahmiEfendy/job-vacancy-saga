import { put, call, takeLatest } from 'redux-saga/effects';

import { getJob } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { GET_JOB_REQUEST } from './constants';
import { getJobFailed, getJobSuccess } from './actions';

function* doGetJob() {
  yield put(setLoading(true));

  try {
    const response = yield call(getJob);

    yield put(getJobSuccess(response));
  } catch (err) {
    yield put(getJobFailed(err.message));
  }

  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(GET_JOB_REQUEST, doGetJob);
}
