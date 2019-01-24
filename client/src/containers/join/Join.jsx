import React, {Component} from 'react';
import { connect } from 'react-redux';
import {isValidString} from '../../utils/string';
import styles from './join.css';

class Join extends Component {
  constructor(props) {
    super(props);
    
    this.usernameInput = React.createRef();
    this.roomInput = React.createRef();
    this.onJoinClick = this.onJoinClick.bind(this);
  }

  onJoinClick() {
    let username = this.usernameInput.current.value;
    let room = this.roomInput.current.value.toLowerCase();

    if (!isValidString(username) || !isValidString(room))
      return console.log('Username and room must be valid strings');

    this.props.setUsername(username);
    this.props.setRoom(room);
    this.props.socket.emit('join', {username, room});
  }

  render() {
    return (
      <div id={styles["join-panel"]}>
        <div className={styles["join-input"]}>
          <label>Display name:</label>
          <input type="text" name="username" ref={this.usernameInput} autoComplete="off" autoFocus />
        </div>
        <div className={styles["join-input"]}>
          <label>Room name:</label>
          <input type="text" name="room" ref={this.roomInput} autoComplete="off" />
        </div>
        <button onClick={this.onJoinClick}>Join</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    socket: state.socket
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUsername: (username) => dispatch({type: 'SET_USERNAME', value: username}),
    setRoom: (room) => dispatch({type: 'SET_ROOM', value: room}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Join);