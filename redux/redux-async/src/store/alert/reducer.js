import alertEvents from './events';

const initialState = {
  alerts: []
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case alertEvents.NEW_ALERT:
      return {
        ...state,
        alerts: state.alerts.concat(action.payload)
      }
    case alertEvents.REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter(alert => 
          alert._id !== action.payload
        )
      }
    default:
      return {
        ...state
      }
  }
}

export default alertReducer;