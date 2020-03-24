const combineReducers = (reducers, initialState) => {
  const reducerKeys = Object.keys(reducers);

  return (state = initialState, action) => {
    const nextState = {};

    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);

      nextState[key] = nextStateForKey;
    };

    return nextState;
  };
};


export default combineReducers;
