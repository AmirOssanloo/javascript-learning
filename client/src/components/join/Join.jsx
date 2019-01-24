import React from 'react';
import styles from './join.css';

const Join = (props) => {
  return (
    <div id={styles["join-panel"]}>
      <div className={styles["join-input"]}>
        <label>Display name:</label>
        <input type="text" name="username" onChange={props.onInputChange} autoComplete="off" autoFocus />
      </div>
      <div className={styles["join-input"]}>
        <label>Room name:</label>
        <input type="text" name="room" onChange={props.onInputChange} autoComplete="off" />
      </div>
      <button onClick={props.onJoinClick}>Join</button>
    </div>
  );
}

export default Join;