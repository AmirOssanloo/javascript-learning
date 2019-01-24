const initialState = {
  socket: null,
  connected: false,
  username: null,
  room: null,
  users: [],
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SOCKET':
      return {...state, socket: action.value};

    case 'SET_SOCKET_STATUS':
      return {...state, connected: action.value};

    case 'SET_USERNAME':
      return {...state, username: action.value};

    case 'SET_ROOM':
      return {...state, room: action.value};

    case 'UPDATE_USERLIST':
      return {...state, users: action.value};

    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [action.value].concat(state.messages)
      }

    default:
      return state;
  }
}