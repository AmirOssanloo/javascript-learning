export const counterState = {
  counter: 0,
  numbers: []
};

export const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case 'ACTION_INCREMENT_BY':
      return {
        ...state,
        counter: state.counter + action.payload,
        numbers: [...state.numbers, action.payload]
      };
    case 'ACTION_DECREMENT_BY':
      return {
        ...state,
        counter: state.counter - action.payload,
        numbers: [...state.numbers, action.payload]
      };
    default:
      return state;
  }
};
