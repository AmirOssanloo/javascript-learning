import React from 'react';

const UserList = (props) => {
  let users = props.users.map((user, index) =>
    <li key={index}>{user}</li>);

  return (
    <ul>
      {users}
    </ul>
  );
}

export default UserList;