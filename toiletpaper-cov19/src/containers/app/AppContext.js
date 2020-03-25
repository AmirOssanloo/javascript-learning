import React, { createContext, useState, useContext } from 'react';
import useCreateContext from '#hooks/useCreateContext';

const Context = createContext();
const { Provider } = Context;

export const useRootContext = () => {
  return useContext(Context);
};

export const ContextProvider = (props) => {
  const context = useCreateContext(props);
  const { children } = props;

  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
};
