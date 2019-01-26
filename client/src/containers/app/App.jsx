import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cursors from '../cursors/Cursors';
import Chat from '../chat/Chat';
import Join from '../join/Join';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles['app-outer']}>
        {(this.props.username) ? <Chat /> : <Join />}
        {(this.props.username) ? <Cursors /> : null}
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