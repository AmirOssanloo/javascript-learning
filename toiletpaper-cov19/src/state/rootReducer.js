import combineReducers from './utils/combineReducers';
import { appReducer, appState } from './reducers/app/reducer';
import { counterReducer, counterState } from './reducers/counter/reducer'

const reducers = {
  app: appReducer,
  counter: counterReducer
};

export const initialState = {
  app: appState,
  counter: counterState
};

export const rootReducer = combineReducers(reducers, initialState);
