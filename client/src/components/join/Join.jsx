import React from 'react';

const Join = (props) => {
  return (
    <div id="join">
      <label>Display name:</label>
      <input type="text" name="username" onChange={props.onInputChange} autoFocus />
      <label>Room name:</label>
      <input type="text" name="room" onChange={props.onInputChange} />
      <button onClick={props.onJoinClick}>Join</button>
    </div>
  );
}

export default Join;