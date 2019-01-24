import React, { Component } from 'react';
import { connect } from 'react-redux';
import socket from '../../socket/socket';
import Cursors from '../cursors/Cursors';
import Chat from '../chat/Chat';
import Join from '../join/Join';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    socket.setupSocket();
  }

  render() {
    return (
      <div className={styles['app-outer']}>
        <div className={styles['app-inner']}>
          {/* {(this.props.username) ? <Cursors /> : null} */}
          {(this.props.username) ? <Chat /> : <Join />}
        </div>
      </div>
    );
  }
} 

const mapStateToProps = state => {
  return {
    socket: state.socket,
    username: state.username,
    users: state.users
  }
}

export default connect(mapStateToProps)(App);