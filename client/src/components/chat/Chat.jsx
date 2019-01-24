import React, {Component} from 'react';
import { connect } from 'react-redux';
import {TweenLite, Power2} from 'gsap';
import Message from './message/Message';
import {isValidString} from '../../utils/string';
import styles from './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props)

    this.messageInput = React.createRef();
    this.messagesContainer = React.createRef();
    this.onSendMessageClick = this.onSendMessageClick.bind(this);
  }

  componentDidMount() {
    this.props.socket.on('newMessage', obj => {
      this.props.onAddMessage(obj);
    });
  }

  componentDidUpdate() {
    if (this.messagesContainer.current.scrollTop < 200)
      TweenLite.to(this.messagesContainer.current, 0.2, {scrollTop: 0, ease: Power2.easeInOut});
  }

  onSendMessageClick() {
    let message = this.messageInput.current.value;

    if (!isValidString(message))
      return console.log('Message must be a valid string');

    let payload = {
      from: this.props.username,
      text: message
    }

    this.props.socket.emit('createMessage', payload, () => {
      TweenLite.to(this.messagesContainer.current, 0.2, {scrollTop: 0, ease: Power2.easeInOut});
    });
  }

  render() {
    let messages = this.props.messages.map((message, index) =>
      <Message key={index} params={message} />);

    return (
      <div id={styles["chat-panel"]}>
        <div id={styles["message-input-container"]}>
          <div className={styles["message-input"]}>
            <input
              ref={this.messageInput}
              name="message"
              type="text"
              placeholder="Message"
              autoComplete="off"
              autoFocus
              />

            <button className="send-message" onClick={this.onSendMessageClick}>Send</button>
          </div> 
        </div>

        <ul id={styles["messages-container"]} ref={this.messagesContainer}>
          {messages}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    socket: state.socket,
    username: state.username,
    room: state.room,
    messages: state.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUsername: (username) => dispatch({type: 'SET_USERNAME', value: username}),
    setRoom: (room) => dispatch({type: 'SET_ROOM', value: room}),
    onAddMessage: (obj) => dispatch({type: 'ADD_MESSAGE', value: obj}),
    updateUserList: (users) => dispatch({type: 'UPDATE_USERLIST', value: users})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);