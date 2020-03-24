import appEvents from './events';

export const appState = {
  globalSheetsRolled: 0,
  userSheetsRolled: 0
};

export const appReducer = (state = appState, action) => {
  switch (action.type) {
    case appEvents.INCREMENT_USER_SHEETS_ROLLED:
      const userSheetsRolled = state.userSheetsRolled + 1;
      return { ...state, userSheetsRolled };
    default:
      return state;
  }
};
