import { call, put, takeLatest } from 'redux-saga/effects';

import { getJobDetail } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { GET_JOB_DETAIL_REQUEST } from './constants';
import { getJobDetailFailed, getJobDetailSuccess } from './actions';

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

export default function* jobDetailSaga() {
  yield takeLatest(GET_JOB_DETAIL_REQUEST, doGetJobDetail);
}
