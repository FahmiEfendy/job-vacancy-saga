import { call, put, takeLatest } from 'redux-saga/effects';

import { createJobApplication, deleteJob, getJobDetail } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { CREATE_JOB_APPLICATION_REQUEST, DELETE_JOB_REQUEST, GET_JOB_DETAIL_REQUEST } from './constants';
import {
  createJobApplicationSuccess,
  deleteJobFailed,
  deleteJobSuccess,
  getJobDetailFailed,
  getJobDetailSuccess,
} from './actions';

function* doGetJobDetail(action) {
  yield put(setLoading(true));

  try {
    const response = yield call(getJobDetail, action.id);

    yield put(getJobDetailSuccess(response));
  } catch (err) {
    yield put(getJobDetailFailed(err.message));
  }

  yield put(setLoading(false));
}

function* doCreateJob(action) {
  yield put(setLoading(true));

  try {
    const response = yield call(deleteJob, action.payload);

    yield put(deleteJobSuccess(response));
  } catch (err) {
    yield put(deleteJobFailed(err.message));
  }

  yield put(setLoading(false));
}

function* doCreateApplication(action) {
  yield setLoading(true);

  try {
    const response = yield call(createJobApplication, action.payload);

    yield put(createJobApplicationSuccess(response));
  } catch (err) {
    yield put(createJobApplicationSuccess(action.error));
  }

  yield setLoading(false);
}

export default function* jobDetailSaga() {
  yield takeLatest(GET_JOB_DETAIL_REQUEST, doGetJobDetail);
  yield takeLatest(DELETE_JOB_REQUEST, doCreateJob);
  yield takeLatest(CREATE_JOB_APPLICATION_REQUEST, doCreateApplication);
}
