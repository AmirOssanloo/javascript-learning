import React from 'react';

const Message = (props) => {
  let message = (props.text)
    ? <p>{props.text}</p>
    : <a>My location</a>

  return (
    <li className="message">
      <div className="title">
        <h4>Admin</h4>
        <span>12:30</span>
      </div>
      <div className="body">
        {message}
      </div>
    </li>
  );
}

export default Message;