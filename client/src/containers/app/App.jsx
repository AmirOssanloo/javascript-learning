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
        {(this.props.view === 'JOIN') ? <Join /> : null}
        {(this.props.view === 'CHAT') ? <Chat /> : null}
        {(this.props.view === 'CHAT') ? <Cursors /> : null}
      </div>
    );
  }
} 

const mapStateToProps = state => {
  return {
    socket: state.socket,
    view: state.view,
    username: state.username,
    users: state.users
  }
}

export default connect(mapStateToProps)(App);