const initialState = {
  title: 'WELCOME AMERICA'
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_CHANGE_TITLE':
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export default appReducer;
