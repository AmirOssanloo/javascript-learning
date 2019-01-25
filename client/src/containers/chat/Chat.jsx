import React, {Component} from 'react';
import { connect } from 'react-redux';
import store from '../../store/store';
import {TweenLite, Power2} from 'gsap';
import {isValidString} from '../../utils/string';
import Message from './message/Message';
import styles from './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props)

    this.messageInput = React.createRef();
    this.messagesContainer = React.createRef();
    this.onSendMessageClick = this.onSendMessageClick.bind(this);
  }

  componentDidMount() {
    this.props.socket.on('addMessage', message => {
      this.props.onAddMessage(message);
    });
  }

  componentDidUpdate() {
    if (this.messagesContainer.current.scrollTop < 200)
      TweenLite.to(this.messagesContainer.current, 0.2, {scrollTop: 0, ease: Power2.easeInOut});
  }

  onSendMessageClick() {
    if (!isValidString(this.messageInput.current.value))
      return console.log('Message must be a valid string');

    let payload = {
      username: this.props.username,
      text: this.messageInput.current.value
    }

    this.props.socket.emit('createMessage', payload, () => {
      TweenLite.to(this.messagesContainer.current, 0.2, {scrollTop: 0, ease: Power2.easeInOut});
      this.messageInput.current.value = '';
    });
  }

  render() {
    let messages = this.props.messages.map((message, index) =>
      <Message key={index} params={message} />);

    return (
      <div>
        <div id={styles["room-title"]}>
          <span>Room: {this.props.room.toUpperCase()}</span>
        </div>
        <div id={styles["chat-panel"]}>
          <div id={styles["message-input-container"]}>
            <div className={styles["message-input"]}>
              <input
                ref={this.messageInput}
                name="message"
                type="text"
                placeholder="Message..."
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
    onAddMessage: (message) => dispatch({type: 'ADD_MESSAGE', value: message})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);