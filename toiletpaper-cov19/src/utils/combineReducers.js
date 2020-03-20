const combineReducers = (reducers) => {
  const reducerKeys = Object.keys(reducers);

  return (state = initialState, action) => {
    const nextState = {};

    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);

      console.log(key, previousStateForKey);

      nextState[key] = nextStateForKey;
    };

    return nextState;
  };
};

const getInitialState = (reducers) => {
  const reducerKeys = Object.keys(reducers);
  const initialState = {};

  for (let i = 0; i < reducerKeys.length; i++) {
    // initialState[key] =
  }
};



export default combineReducers;
