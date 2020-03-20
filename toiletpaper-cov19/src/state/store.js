import React, { createContext, useReducer } from 'react';
import { rootReducer, initialState } from './rootReducer';

const store = createContext();
const { Provider } = store;

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return <Provider value={{ state, dispatch }}>
    {children}
  </Provider>
};

export { store, ContextProvider };
