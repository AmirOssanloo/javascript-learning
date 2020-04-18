/* Events
================================== */
const CLEAR = 'user/CLEAR';
const SET = 'user/SET';

/* Default state
================================== */
const DEFAULT_STATE = null;

/* Reducer
================================== */
const userReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case SET:
      return action.user;
    case CLEAR:
      return null;
    default:
      return state;
  }
};

export default userReducer;

/* Action creators
================================== */
export const setUser = user => {
  return { type: SET, user };
};

export const clearUser = () => {
  return { type: CLEAR };
};
