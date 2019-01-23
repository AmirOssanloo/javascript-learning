import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message/Message';
import styles from './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onSendMessageClick = this.onSendMessageClick.bind(this);
  }

  onSendMessageClick() {
    let message = this.state.message;

    this.props.socket.emit('createMessage', {
      from: this.props.user,
      text: message
    }, () => {
      //
    });
  }

  onSendLocationClick() {

  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
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
          <input
            name="message"
            type="text"
            placeholder="Message"
            autoComplete="off"
            onChange={this.onInputChange}
            autoFocus
            />

          <button id="send-message" onClick={this.onSendMessageClick}>Send</button>
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

const mapDispatchToProps = dispatch => {
  return {
    onAddMessage: (msg) => dispatch({type: 'ADD_MESSAGE', value: msg})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);