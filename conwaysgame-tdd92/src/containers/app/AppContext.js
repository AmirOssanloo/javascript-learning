import React, { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext();
const { Provider } = Context;

const useCreateContext = () => {
  const [game, setGame] = useState(false);

  return {
    game,
    setGame
  }
};

export const useAppContext = () => {
  return useContext(Context);
};

export const ContextProvider = ({ children }) => {
  const context = useCreateContext();

  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
};
