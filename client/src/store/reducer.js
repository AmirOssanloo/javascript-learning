const initialState = {
  socket: null,
  connected: false,
  messages: [
    {text: 'Whatever!!'},
    {text: 'Testing..'},
    {text: 'Wooah'},
    {text: 'Whatever!!'}
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SOCKET':
      return {...state, socket: action.value};

    case 'SET_SOCKET_STATUS':
      return {...state, connected: action.value};

    default:
      return state;
  }
}