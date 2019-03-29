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
    this.props.fetchKittens();
  }

  onAddKitten() {
    const name = this.nameRef.current.value;
    const role = this.roleRef.current.value;

    if (name.length <= 0) return console.log('Name is required');
    if (role.length <= 0) return console.log('Role is required');

    this.props.addKitten({name, role});
  }

  render() {
    return (
      <div>
        <h1>Add a warrior kitten</h1>
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
  online: state.app.online,
  kittens: state.kitten.kittens
});

export default connect(mapStateToProps, {
  fetchKittens,
  addKitten
})(App);