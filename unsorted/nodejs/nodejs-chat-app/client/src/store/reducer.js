const initialState = {
  socket: null,
  view: 'JOIN',
  username: null,
  room: null,
  users: [],
  rooms: [],
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SOCKET':
      return {...state, socket: action.value};

    case 'SET_VIEW':
      return {...state, view: action.value};

    case 'SET_USERNAME':
      return {...state, username: action.value};

    case 'SET_ROOM':
      return {...state, room: action.value};

    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [action.value].concat(state.messages)
      }

    default:
      return state;
  }
}