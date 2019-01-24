import React from 'react';

const Message = (props) => (
  <li className="message">
    <div className="title">
      <h4>{props.message.from}</h4>
      <span>{props.message.createdAt}</span>
    </div>
    <div className="body">
      {props.message.text}
    </div>
  </li>
);

export default Message;