const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_INCREMENT_BY':
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case 'ACTION_DECREMENT_BY':
      return {
        ...state,
        counter: state.counter - action.payload
      };
    default:
      return state;
  }
};

export default counterReducer;
