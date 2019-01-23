import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from '../chat/Chat';
import Join from '../../components/join/Join';
import UserList from '../../components/userlist/UserList';
import {isValidString} from '../../utils/string';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      room: ''
    }

    this.onJoinClick = this.onJoinClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    let socket = this.props.socket;

    // Store socket connection instance in store
    this.props.setSocket(socket);
    
    // Socket has connected
    socket.on('connect', () => {
      this.props.setSocketStatus(true);

      socket.on('newMessage', msg => {
        this.props.onAddMessage({text: msg.text});
      });

      socket.on('updateUserList', (users) => {
        this.props.updateUserList(users);
        console.log(users)
      });
    });
    
    // Socket has disconnected
    socket.on('disconnect', () => {
      this.props.setSocketStatus(false);
    });
  }

  onJoinClick() {
    let username = this.state.username;
    let room = this.state.room;

    // Validate username and join input
    if (!isValidString(username) || !isValidString(room)) {
      return console.log('Username and room must be valid strings');
    }

    // Update store
    this.props.setUsername(username);
    this.props.setRoom(room);

    // Join
    this.props.socket.emit('join', {username, room});
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    let username = this.props.username;
    let room = this.props.room;

    let view = (!username && !room)
      ? <Join onInputChange={this.onInputChange} onJoinClick={this.onJoinClick}/>
      : <Chat username={username} room={room} /> ;

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
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSocket: (socket) => dispatch({type: 'SET_SOCKET', value: socket}),
    setSocketStatus: (status) => dispatch({type: 'SET_SOCKET_STATUS', value: status}),
    setUsername: (username) => dispatch({type: 'SET_USERNAME', value: username}),
    setRoom: (room) => dispatch({type: 'SET_ROOM', value: room}),
    onAddMessage: (msg) => dispatch({type: 'ADD_MESSAGE', value: msg}),
    updateUserList: (users) => dispatch({type: 'UPDATE_USERLIST', value: users})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);