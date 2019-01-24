import React, {Component} from 'react';
import { connect } from 'react-redux';
import {TweenLite, Power2} from 'gsap';
import Message from './message/Message';
import {isValidString} from '../../utils/string';
import styles from './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props)

    this.messagesContainer = React.createRef();
    this.onSendMessageClick = this.onSendMessageClick.bind(this);
  }

  componentDidUpdate() {
    let scrollEl = this.messagesContainer.current;
    let scrollY = scrollEl.scrollTop;
    
    if (scrollY < 200)
      TweenLite.to(scrollEl, 0.2, {scrollTop: 0, ease: Power2.easeInOut});
  }

  onSendMessageClick() {
    let message = this.props.message;

    if (!isValidString(message))
      return console.log('Message must be a valid string');

    this.props.socket.emit('createMessage', {
      from: this.props.user,
      text: message
    });

    let scrollEl = this.messagesContainer.current;
    let scrollY = scrollEl.scrollTop;
    
    TweenLite.to(scrollEl, 0.2, {scrollTop: 0, ease: Power2.easeInOut});
  }

  render() {
    let messages = this.props.messages.map((message, index) =>
      <Message key={index} params={message} />);

    return (
      <div id={styles["chat-panel"]}>
        <div id={styles["message-input-container"]}>
          <div className={styles["message-input"]}>
            <input
              name="message"
              type="text"
              placeholder="Message"
              onChange={this.props.onInputChange}
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

export default connect(mapStateToProps)(Chat);