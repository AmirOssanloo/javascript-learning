import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from '../../components/chat/Chat';
import Join from '../../components/join/Join';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles['app-outer']}>
        <div className={styles['app-inner']}>
          {(this.props.room) ? <Chat /> : <Join />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    socket: state.socket,
    room: state.room
  }
}

export default connect(mapStateToProps)(App);



// this.props.socket.on('updateUserList', (users) => {
//   this.props.updateUserList(users);
// });