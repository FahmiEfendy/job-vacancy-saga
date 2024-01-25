import { call, put, takeLatest } from 'redux-saga/effects';

import { createJob } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { CREATE_JOB_REQUEST } from './constans';
import { createJobFailed, createJobSuccess } from './actions';

function* doCreateJob(action) {
  yield put(setLoading(true));

  try {
    const response = yield call(createJob, action.payload);
    yield put(createJobSuccess(response));
  } catch (err) {
    yield put(createJobFailed(action.error));
  }

  yield put(setLoading(false));
}

export default function* doCreateJobSaga() {
  yield takeLatest(CREATE_JOB_REQUEST, doCreateJob);
}
