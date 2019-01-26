import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TimelineLite, TweenLite, Power2} from 'gsap';
import {isValidString} from '../../utils/string';
import withContainer from '../../hoc/withContainer';
import styles from './join.css';

class Join extends Component {
  constructor(props) {
    super(props);

    this.joinPanelRef = React.createRef();
    this.usernameInputRef = React.createRef();
    this.roomInputRef = React.createRef();
    this.alertsRef = React.createRef();
    this.onJoinClick = this.onJoinClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentDidMount() {
    let timelineIn = this.props.timelineIn;
    let timelineOut = this.props.timelineOut;

    // Panel in
    timelineIn.fromTo(this.joinPanelRef.current, 0.45, {y: -300}, {y: 10, ease: Power2.easeOut});
    timelineIn.to(this.joinPanelRef.current, 0.25, {y: 0, ease: Power1.easeInOut});
    timelineIn.staggerFrom(this.joinPanelRef.current.childNodes, 0.3, {y: 5, opacity: 0, ease: Power1.easeInOut}, 0.1, '-= 0.2');

    // Panel out
    timelineOut.to(this.joinPanelRef.current, 0.45, {y: -300, ease: Power2.easeIn});

    this.props.timelineIn.vars.onStart = () => {
      console.log("Hello");
    };

    this.props.timelineIn.vars.onComplete = () => {
      console.log("Hello");
    };

    this.props.timelineOut.vars.onStart = () => {
      console.log("Bye");
    };

    this.props.timelineOut.vars.onComplete = () => {
      this.props.setView('CHAT');
      this.props.socket.emit('join', this.props.username, this.props.room);
    };
  }

  onJoinClick(e) {
    let username = this.usernameInputRef.current.value;
    let room = this.roomInputRef.current.value.toLowerCase();

    if (!isValidString(username) || !isValidString(room))
      return this.showAlert();

    this.props.setUsername(username);
    this.props.setRoom(room);
    this.props.timelineOut.play();
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
        <div id={styles["join-panel"]} ref={this.joinPanelRef} onKeyPress={this.onKeyPress}>
          <div className={styles["join-input"]}>
            <label>Display name:</label>
            <input type="text" name="username" ref={this.usernameInputRef} autoComplete="off" autoFocus />
          </div>
          <div className={styles["join-input"]}>
            <label>Room name:</label>
            <input type="text" name="room" ref={this.roomInputRef} autoComplete="off" />
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
    setView: (view) => dispatch({type: 'SET_VIEW', value: view}),
    setUsername: (username) => dispatch({type: 'SET_USERNAME', value: username}),
    setRoom: (room) => dispatch({type: 'SET_ROOM', value: room}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withContainer(Join));