import combineReducers from './utils/combineReducers';
import { appReducer, appState } from './reducers/app/reducer';

const reducers = {
  app: appReducer
};

export const initialState = {
  app: appState
};

export const rootReducer = combineReducers(reducers, initialState);
