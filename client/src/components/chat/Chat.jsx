import React from 'react';
import Message from './message/Message';
import styles from './Chat.css';

const Chat = (props) => {
  let messages = props.messages.map((message, index) =>
    <Message key={index} message={message} />);

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
          onChange={props.onInputChange}
          autoFocus
          />

        <button id="send-message" onClick={props.onSendMessageClick}>Send</button>
      </div>
    </div>
  );
}

export default Chat;