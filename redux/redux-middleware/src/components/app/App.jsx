import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchKittens, addKitten } from '../../store/kitten/actions';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.nameRef = React.createRef();
    this.roleRef = React.createRef();
    this.onAddKitten = this.onAddKitten.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchKittens()
      .then(() => console.log('Got em kittens!'))
      .catch(() => console.log('Oh noo, pussy got away!'));
  }

  onAddKitten() {
    const name = this.nameRef.current.value;
    const role = this.roleRef.current.value;

    if (name.length <= 0) return console.log('Name is required');
    if (role.length <= 0) return console.log('Role is required');

    this.props.addKitten({name, role})
    .then(() => console.log('More kittens to the army!'))
    .catch(() => console.log('Where did pussy go?'));
  }

  render() {
    return (
      <div>
        <h1>
          {this.props.fetching
            ? 'Fetching some data'
            : 'Add a warrior kitten'}
        </h1>
        <input
          ref={this.nameRef}
          type="text"
          placeholder="name" />
        <input
          ref={this.roleRef}
          type="text"
          placeholder="role" />
        <div
          className={styles["button"]}
          onClick={this.onAddKitten}>
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
  fetching: state.api.fetching,
  kittens: state.kitten.kittens
});

export default connect(mapStateToProps, {
  fetchKittens,
  addKitten
})(App);