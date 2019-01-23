import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from './../chat/Chat';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let socket = this.props.socket;

    // Store socket connection instance in store
    this.props.setSocket(socket);
    
    // Socket has connected
    socket.on('connect', () => {
      this.props.setSocketStatus(true);
    });
    
    // Socket has disconnected
    socket.on('disconnect', () => {
      this.props.setSocketStatus(false);
    });
  }

  render() {
    return (
      <div className={styles['app-outer']}>
        <div className={styles['app-inner']}>
          <div id="users"></div>
          <div id="main">
            <Chat />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSocket: (socket) => dispatch({type: 'SET_SOCKET', value: socket}),
    setSocketStatus: (status) => dispatch({type: 'SET_SOCKET_STATUS', value: status})
  }
}

export default connect(null, mapDispatchToProps)(App);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Chat from './../chat/Chat';
// import styles from './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     // Store socket connection in store
//     this.props.setSocket(this.props.socket);
//   }

//   componentDidMount() {
//     this.props.socket.emit('connect', () => {
//       console.log('Connected');
//     });
//   }

//   render() {
//     return (
//       <div className={styles['app-outer']}>
//         <div className={styles['app-inner']}>
//           <div id="users"></div>
//           <div id="main">
//             <Chat />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setSocket: (socket) => dispatch({type: 'SET_SOCKET', value: socket})
//   }
// }

// export default connect(null, mapDispatchToProps)(App);