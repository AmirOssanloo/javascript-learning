import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchKittens } from '../../store/kitten/actions';
import { toggleStatus } from '../../store/app/actions';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.fetchKittens();
  }

  render() {
    return (
      <div>
        <h1>Redux Middleware</h1>
        <ul></ul>

        <div
          className={styles["button"]}
          onClick={this.props.toggleStatus}>
          {this.props.online ? 'GO ONLINE' : 'GO OFFLINE'}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  online: state.app.online
});

export default connect(mapStateToProps, {
  fetchKittens,
  toggleStatus
})(App);