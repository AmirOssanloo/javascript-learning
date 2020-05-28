import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showError: false,
      counter: 0
    };
  }

  incrementCounter = () => {
    this.setState(state => ({
      ...state,
      counter: state.counter + 1
    }));
  };

  decrementCounter = () => {
    if (this.state.counter === 0) {
      this.setState(state => ({
        ...state,
        showError: true
      }), () => {
        setTimeout(() => {
          this.setState(state => ({
            ...state,
            showError: false
          }));
        }, 2500);
      });

      return;
    }
    
    this.setState(state => ({
      ...state,
      counter: state.counter - 1
    }));
  }

  render() {
    const { showError, counter } = this.state;

    return (
      <div data-test="app">
        <h1 data-test="counter-display">The counter is currently {counter}</h1>
        {showError && (counter === 0) && <h3 data-test="counter-error">Counter can't be less than 0</h3>}
        <button
          data-test="increment-button"
          onClick={this.incrementCounter}>
          Increment counter
        </button>
        <button
          data-test="decrement-button"
          onClick={this.decrementCounter}>
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
