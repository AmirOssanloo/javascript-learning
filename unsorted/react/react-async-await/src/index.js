import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greeting: null
    }
  }

  async componentDidMount() {
    const greeting = await this.onSayHello('Amir');

    this.setState({
      greeting
    });
  }

  async onSayHello(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Hello, ${name}`);
      }, 2000);
    });
  }

  render() {
    return (
      <div>
        <h1>Async / Await in React environment</h1>
        {this.state.greeting ? this.state.greeting : 'Searching for someone to greet...'}
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));