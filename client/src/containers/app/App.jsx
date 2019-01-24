import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from '../../components/chat/Chat';
import Join from '../../components/join/Join';
import UserList from '../../components/userlist/UserList';
import {isValidString} from '../../utils/string';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: {
        username: '',
        room: '',
        message: ''
      }
    }

    this.setupSocketConnection();

    this.onJoinClick = this.onJoinClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSendMessageClick = this.onSendMessageClick.bind(this);
  }

  setupSocketConnection() {
    let socket = this.props.socket;

    // Store socket connection instance in store
    this.props.setSocket(socket);
    
    socket.on('connect', () => {
      this.props.setSocketStatus(true);

      socket.on('newMessage', obj => {
        this.props.onAddMessage(obj);

        console.log(obj)
      });

      socket.on('updateUserList', (users) => {
        this.props.updateUserList(users);
      });
    });
    
    socket.on('disconnect', () => {
      this.props.setSocketStatus(false);
    });
  }

  onJoinClick() {
    let username = this.state.inputs.username;
    let room = this.state.inputs.room;

    if (!isValidString(username) || !isValidString(room))
      return console.log('Username and room must be valid strings');

    this.props.setUsername(username);
    this.props.setRoom(room);
    this.props.socket.emit('join', {username, room});
  }

  onInputChange(e) {
    let value = e.target.value;
    let name = e.target.name;

    this.setState(prevState => ({
      inputs: {...prevState.inputs, [name]: value}
    }));
  }

  onSendMessageClick() {
    let message = this.state.inputs.message;

    if (!isValidString(message))
      return console.log('Message must be a valid string');

    this.props.socket.emit('createMessage', {
      from: this.props.user,
      text: message
    });
  }

  render() {
    // let username = this.props.username;
    // let room = this.props.room;
    // let messages = this.props.messages;

    let username = 'Amir';
    let room = 'Style';
    let messages = [
      {from: 'Girl D', text: 'I found out that Tom now has three citations for drunken driving.', createdAt: Date.now()},
      {from: 'Boy A', text: 'She has been dead five years.', createdAt: Date.now()},
      {from: 'Girl C', text: 'I do not have a girlfriend.', createdAt: Date.now()}
    ];

    let view = (!username && !room)
      ? <Join onInputChange={this.onInputChange} onJoinClick={this.onJoinClick}/>
      : <Chat onInputChange={this.onInputChange} onSendMessageClick={this.onSendMessageClick} username={username} room={room} messages={messages} /> ;

    return (
      <div className={styles['app-outer']}>
        <div className={styles['app-inner']}>
          <UserList users={this.props.users} />
          {view}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    room: state.room,
    users: state.users,
    messages: state.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSocket: (socket) => dispatch({type: 'SET_SOCKET', value: socket}),
    setSocketStatus: (status) => dispatch({type: 'SET_SOCKET_STATUS', value: status}),
    setUsername: (username) => dispatch({type: 'SET_USERNAME', value: username}),
    setRoom: (room) => dispatch({type: 'SET_ROOM', value: room}),
    onAddMessage: (obj) => dispatch({type: 'ADD_MESSAGE', value: obj}),
    updateUserList: (users) => dispatch({type: 'UPDATE_USERLIST', value: users})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);