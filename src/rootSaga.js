import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import homeSaga from '@pages/Home/saga';
import jobDetailSaga from '@pages/JobDetail/saga';
import doCreateJobSaga from '@pages/JobCreate/saga';

import jobApplicationSaga from '@pages/JobApplication/saga';

export default function* rootSaga() {
  yield all([appSaga(), homeSaga(), jobDetailSaga(), doCreateJobSaga(), jobApplicationSaga()]);
}
