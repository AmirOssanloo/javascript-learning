import React, { useContext } from 'react';
import { store } from '#state/store';

const titles = [
  'HELLO AMERICA',
  'WELCOME TO HELL',
  'WHY ARE PEOPLE BUYING TOILET PAPER?',
  'THE OCEAN IS FREEZING COLD',
  'SPACE SHUTTLE TO OUTER SPACE'
]

const App = () => {
  const { state, dispatch } = useContext(store);
  const { title } = state.appReducer;
  const { counter } = state.counterReducer;

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => {
        const index = Math.floor(Math.random() * titles.length);
        const title = titles[index];
        dispatch({ type: 'ACTION_CHANGE_TITLE', payload: title });
      }}>SWAP TITLE!</button>
      <hr />

      <h1>{counter}</h1>
      <button onClick={() => {
        dispatch({ type: 'ACTION_INCREMENT_BY', payload: 3 });
      }}>INCREMENT BY 3</button>
      <button onClick={() => {
        dispatch({ type: 'ACTION_DECREMENT_BY', payload: 1 });
      }}>DEINCREMENT BY 1</button>
    </div>
  );
};

export default App;
