import appEvents from './events';

export const appState = {
  globalSheetsRolled: 0,
  userSheetsRolled: 0
};

export const appReducer = (state = appState, action) => {
  switch (action.type) {
    case appEvents.INCREMENT_SHEETS_ROLLED:
      let userSheetsRolled = state.userSheetsRolled + action.payload;
      return { ...state, userSheetsRolled };
    default:
      return state;
  }
};
