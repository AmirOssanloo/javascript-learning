import React, {Component} from 'react';
import {TweenMax} from 'gsap';
import styles from './Alerts.css';

class Alerts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }
  
  showAlert() {
    
  }

  hideAlert() {

  }

  render() {
    return (
      <div id={styles["alerts"]}>
        <span className={styles["alert"]}>Use alphanumeric strings</span>
      </div>
    );
  }
}

export default Alerts;