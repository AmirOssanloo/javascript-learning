import React, { Component } from 'react';
import axios from 'axios';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  postToApi(url) {
    axios.get(url)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className={styles['app-outer']}>
        <div className={styles['app-inner']}>
          <h1>Welcome to my App</h1>
          <hr />
          <button onClick={() => this.postToApi('/api/one')}>Get One</button>
          <button onClick={() => this.postToApi('/api/two')}>Get Two</button>
        </div>
      </div>
    );
  }
}

export default App;