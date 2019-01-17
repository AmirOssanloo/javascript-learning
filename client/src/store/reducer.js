import ViewType from './types/views';
import ActionType from './types/actions';

const today = new Date();
const year = today.getUTCFullYear();
const month = today.getUTCMonth();
const day = today.getUTCDate();

const initialState = {
  view: ViewType.YEAR,
  today,
  year,
  month,
  day
};

// State
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PREV_YEAR:
      return {...state, year: state.year - 1};
    
    case ActionType.NEXT_YEAR:
      return {...state, year: state.year + 1};

    case ActionType.PREV_MONTH:
      return {
        ...state,
        month: (state.month === 0) ? 11 : state.month - 1
      };

    case ActionType.NEXT_MONTH:
      return {
        ...state,
        month: (state.month + 1) % 12
      };

    case ActionType.SET_MONTH:
      return {...state, month: action.value}
    
    case ActionType.SET_DAY:
      return {...state, day: action.value}

    case ActionType.SET_VIEW:
      return {...state, view: action.value}

    default:
      return state
  }
};