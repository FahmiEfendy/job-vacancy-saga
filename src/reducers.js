import { combineReducers } from 'redux';

import appReducer, { storedKey as storedAppState } from '@containers/App/reducer';
import clientReducer, { storedKey as storedClientState } from '@containers/Client/reducer';
import languageReducer from '@containers/Language/reducer';

import homeReducer, { storedKey as storedHomeReducer } from '@pages/Home/reducer';
import jobDetailReducer, { storedKey as storedJobDetailReducer } from '@pages/JobDetail/reducer';
import createJobReducer, { storedKey as storedCreateJobReducer } from '@pages/JobCreate/reducer';
import loginReducer, { storedKey as storedCreateLoginReducer } from '@pages/Login/reducer';

import jobApplicationReducer, { storedKey as storedJobApplicationReducer } from '@pages/JobApplication/reducer';

import { mapWithPersistor } from './persistence';

const storedReducers = {
  app: { reducer: appReducer, whitelist: storedAppState },
  client: { reducer: clientReducer, whitelist: storedClientState },

  home: { reducer: homeReducer, whitelist: storedHomeReducer },
  jobDetail: { reducer: jobDetailReducer, whitelist: storedJobDetailReducer },
  createJob: { reducer: createJobReducer, whitelist: storedCreateJobReducer },
  login: { reducer: loginReducer, whitelist: storedCreateLoginReducer },

  jobApplication: { reducer: jobApplicationReducer, whitelist: storedJobApplicationReducer },
};

const temporaryReducers = {
  language: languageReducer,
};

const createReducer = () => {
  const coreReducer = combineReducers({
    ...mapWithPersistor(storedReducers),
    ...temporaryReducers,
  });
  const rootReducer = (state, action) => coreReducer(state, action);
  return rootReducer;
};

export default createReducer;
