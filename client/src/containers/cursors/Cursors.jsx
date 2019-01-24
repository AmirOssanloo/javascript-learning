import React, {Component} from 'react';
import { connect } from 'react-redux';
import styles from './Cursors.css';

class Cursors extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('mousemove', (e) => {

      this.props.socket.emit('updateCursor', {
        x: e.clientX,
        y: e.clientY
      })
    });
  }

  render() {
    return (
      <div id={styles["cursors-panel"]}>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    socket: state.socket
  }
}

export default connect(mapStateToProps)(Cursors);