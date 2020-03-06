import appEvents from './events';

const initialState = {
  online: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appEvents.TOGGLE_STATUS:
      return {
        ...state,
        online: !state.online
      }

    default:
      return {
        ...state
      }
  }
}

export default appReducer;