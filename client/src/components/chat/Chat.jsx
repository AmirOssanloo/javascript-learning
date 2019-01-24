import React from 'react';
import Message from './message/Message';
import styles from './Chat.css';

const Chat = (props) => {
  let messages = props.messages.map((message, index) =>
    <Message key={index} message={message} />);

  return (
    <div id={styles["chat-panel"]}>
      <ul id="messages">
        {messages}
      </ul>

      <div className={styles["message-input-container"]}>
        <div id={styles["message-input"]}>
          <input
            name="message"
            type="text"
            placeholder="Message"
            onChange={props.onInputChange}
            autoComplete="off"
            autoFocus
            />

          <button id="send-message" onClick={props.onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;