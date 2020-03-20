export const appState = {
  title: 'WELCOME AMERICA'
};

export const appReducer = (state = appState, action) => {
  switch (action.type) {
    case 'ACTION_CHANGE_TITLE':
      return { ...state, title: action.payload };
    default:
      return state;
  }
};
