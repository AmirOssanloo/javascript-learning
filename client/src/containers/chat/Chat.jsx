import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message/Message';
import styles from './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.onSendMessageClick.bind(this);
  }

  onSendMessageClick() {
    this.props.socket.emit('createMessage', {
      from: 'User',
      text: 'What is this...?'
    }, () => {
      console.log('Response');
    });
  }

  onSendLocationClick() {

  }

  render() {
    let messages = this.props.messages.map((message, index) =>
      <Message key={index} text={message.text} />);

    return (
      <div id="chat">
        <ul id="messages">
          {messages}
        </ul>
        <div id="message-input">
          <input name="message" type="text" placeholder="Message" autoFocus autoComplete="off"/>
          <button id="send-message" onClick={() => this.onSendMessageClick()}>Send</button>
          <button id="send-location">Send location</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    socket: state.socket,
    messages: state.messages
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onIncrement: () => dispatch({type: 'COUNT_INCREMENT'}),
//     onDecrement: () => dispatch({type: 'COUNT_DECREMENT'})
//   }
// }

export default connect(mapStateToProps)(Chat);