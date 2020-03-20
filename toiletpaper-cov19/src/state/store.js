import React, { createContext, useReducer } from 'react';
import rootReducer from './rootReducer';

const store = createContext();
const { Provider } = store;

const initialState = {
  app: {
    title: 'WELCOME AMERICA'
  },
  counter: {
    counter: 0
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return <Provider value={{ state, dispatch }}>
    {children}
  </Provider>
};

export { store, ContextProvider };
