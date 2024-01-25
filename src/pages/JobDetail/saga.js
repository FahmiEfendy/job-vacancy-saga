import { call, put, takeLatest } from 'redux-saga/effects';

import { deleteJob, getJobDetail } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { DELETE_JOB_REQUEST, GET_JOB_DETAIL_REQUEST } from './constants';
import { deleteJobFailed, deleteJobSuccess, getJobDetailFailed, getJobDetailSuccess } from './actions';

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

export default function* jobDetailSaga() {
  yield takeLatest(GET_JOB_DETAIL_REQUEST, doGetJobDetail);
  yield takeLatest(DELETE_JOB_REQUEST, doCreateJob);
}
