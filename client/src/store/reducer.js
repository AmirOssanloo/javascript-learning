const initialState = {
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'COUNT_INCREMENT':
      return {...state, count: action.value + 1};

    case 'COUNT_DECREMENT':
      return {...state, count: action.value - 1};

    default:
      return state;
  }
}