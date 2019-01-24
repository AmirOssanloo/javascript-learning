import React from 'react';
import styles from './UserList.css';

const UserList = (props) => {
  let users = props.users.map((user, index) =>
    <li className={styles["user"]}key={index}>{user.username}, {user.room}, {user.x}, {user.y}</li>);

  return (
    <ul id={styles["userlist-panel"]}>{users}</ul>
  );
}

export default UserList;