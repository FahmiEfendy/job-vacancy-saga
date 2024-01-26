import { call, put, takeLatest } from 'redux-saga/effects';

import { deleteJobApplication, getJobApplication } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { DELETE_JOB_APPLICATION_REQUEST, GET_JOB_APPLICATION_REQUEST } from './constans';
import {
  deleteJobApplicationFailed,
  deleteJobApplicationSuccess,
  getJobApplicationFailed,
  getJobApplicationSuccess,
} from './actions';

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

function* doDeleteJobApplication(action) {
  yield put(setLoading(true));

  try {
    const response = yield call(deleteJobApplication, action.id);

    yield put(deleteJobApplicationSuccess(response));
  } catch (err) {
    yield put(deleteJobApplicationFailed(action.error));
  }

  yield put(setLoading(false));
}

export default function* jobApplicationSaga() {
  yield takeLatest(GET_JOB_APPLICATION_REQUEST, doGetApplication);
  yield takeLatest(DELETE_JOB_APPLICATION_REQUEST, doDeleteJobApplication);
}
