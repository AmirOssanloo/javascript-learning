import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles['app-outer']}>
        <div className={styles['app-inner']}>
          <h1>Welcome to chat app</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({type: 'COUNT_INCREMENT'}),
    onDecrement: () => dispatch({type: 'COUNT_DECREMENT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);