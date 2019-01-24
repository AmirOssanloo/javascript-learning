import React from 'react';
import moment from 'moment';

const Message = (props) => {
  let date = moment(props.message.createdAt);
  
  return (
    <li className="message">
      <div className="title">
        <h4>{props.message.from}</h4>
        <span>{date.format('hh:mm')}</span>
      </div>
      <div className="body">
        {props.message.text}
      </div>
    </li>
  );
}

export default Message;