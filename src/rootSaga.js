import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import registerSaga from '@pages/Register/saga';
import loginSaga from '@pages/Login/saga';
import homeSaga from '@pages/Home/saga';
import jobDetailSaga from '@pages/JobDetail/saga';
import doCreateJobSaga from '@pages/JobCreate/saga';

export default function* rootSaga() {
  yield all([appSaga(), homeSaga(), jobDetailSaga(), doCreateJobSaga()]);
  yield all([appSaga(), registerSaga(), loginSaga()]);
}
