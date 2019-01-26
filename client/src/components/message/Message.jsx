import React from 'react';
import moment from 'moment';
import styles from './message.css';

const Message = (props) => {
  let date = moment(props.params.createdAt);

  return (
    <li className={styles["message"]} >
      <span className={styles["title"]}>{props.params.username}</span>
      <span className={styles['time']}>{date.format('hh:mm')}</span>
      <span className={styles["body"]}>{props.params.text}</span>
    </li>
  );
}

export default Message;