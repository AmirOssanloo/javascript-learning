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
        <h1>Add a warrior kitten</h1>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="role" />
        <div
          className={styles["button"]}
          onClick={this.props.toggleStatus}>
          Publish
        </div>
        <hr />
        <ol>
          {this.props.kittens.map(kitten => (
            <li key={kitten._id}><b>{kitten.name}</b> – {kitten.role}</li>
          ))}
        </ol>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  online: state.app.online,
  kittens: state.kitten.kittens
});

export default connect(mapStateToProps, {
  fetchKittens,
  toggleStatus
})(App);