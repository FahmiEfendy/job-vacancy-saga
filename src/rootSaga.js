import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import homeSaga from '@pages/Home/saga';
import jobDetailSaga from '@pages/JobDetail/saga';

export default function* rootSaga() {
  yield all([appSaga(), homeSaga(), jobDetailSaga()]);
}
