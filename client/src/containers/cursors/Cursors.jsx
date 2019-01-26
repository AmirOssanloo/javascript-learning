import React, {Component} from 'react';
import { connect } from 'react-redux';
import styles from './Cursors.css';

class Cursors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    let socket = this.props.socket;

    document.addEventListener('mousemove', (e) => {
      socket.emit('updateUserCursor', {
        x: e.clientX,
        y: e.clientY
      })
    });

    this.props.socket.on('broadcastUserCursor', users => {
      this.setState({users: users});
    });
  }

  render() {
    let cursors = this.state.users.map((cursor, index) => {
      return <div key={index} className={styles["cursor"]} style={{left: cursor.cursor.x, top: cursor.cursor.y}}>{index}</div>
    });

    return (
      <div id={styles["cursors-panel"]}>
        {cursors}
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