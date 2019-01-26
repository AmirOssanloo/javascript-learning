import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TimelineLite, TweenLite, Power2} from 'gsap';
import {isValidString} from '../../utils/string';
import styles from './join.css';

class Join extends Component {
  constructor(props) {
    super(props);
    
    this.usernameInput = React.createRef();
    this.roomInput = React.createRef();
    this.alertsRef = React.createRef();
    this.onJoinClick = this.onJoinClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onJoinClick(e) {
    let username = this.usernameInput.current.value;
    let room = this.roomInput.current.value.toLowerCase();

    if (!isValidString(username) || !isValidString(room))
      return this.showAlert();

    this.props.setUsername(username);
    this.props.setRoom(room);
    this.props.socket.emit('join', username, room);
  }

  showAlert() {
    let tl = new TimelineLite();
    
    tl.set(this.alertsRef.current, {display: 'block'});
    tl.fromTo(this.alertsRef.current, 0.3, {y: -85}, {y: 3, ease: Power2.easeOut});
    tl.to(this.alertsRef.current, 0.2, {y: 0, ease: Power1.easeInOut});
    tl.to(this.alertsRef.current, 0.35, {delay: 0.75, y: -85, ease: Power2.easeIn});
    tl.set(this.alertsRef.current, {display: 'none'});
  }

  onKeyPress(e) {
    if (e.key === 'Enter')
      this.onJoinClick(null);
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles["join-alert"]} ref={this.alertsRef}>
          <span>Use alphanumeric strings</span>
        </div>
        <div id={styles["join-panel"]} onKeyPress={this.onKeyPress}>
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
        
      </React.Fragment>
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