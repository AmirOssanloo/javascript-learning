import React, { Component, useState } from 'react';
import withMouse from '../../hoc/withMouse';
import styles from './App.css';

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 2,
      y: 5
    };

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <span>
          State from Hello: {this.state.x}, {this.state.y}
        </span>
        {this.props.render(this.state)}
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Hello
        render={props => (
          <React.Fragment>
            <h1>World</h1>
            {JSON.stringify(props, null, 2)}
          </React.Fragment>
        )}
      />
    </div>
  );
};

export default App;
