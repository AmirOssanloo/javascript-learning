import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import CalendarDayCell from '../CalendarDayCell/CalendarDayCell';
import ActionType from '../../store/types/actions';
import styles from './CalendarMonth.css';

class CalendarMonth extends Component {
  constructor(props) {
    super(props);
  }
  
  getDaysInMonth() {
    return 32 - new Date(this.props.year, this.props.month, 32).getDate();
  }
  
  getFirstDay() {
    return (new Date(this.props.year, this.props.month).getUTCDay()) % 7;
  }

  render() {
    let firstDay = this.getFirstDay();
    let lastDay = this.getDaysInMonth() + firstDay;
    let index = 0;
    let rows = [];
    
    // Create Rows & cells
    for (let i = 0; i < 5; i++) {
      let cells = [];
      
      for (let j = 0; j < 7; j++) {
        let date = null;

        if (_.inRange(index, firstDay, lastDay)) 
          date = (index - firstDay) + 1;

        cells.push(<CalendarDayCell key={index} date={date} />);
        index++;
      }

      rows.push(<tr key={i}>{cells}</tr>);
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    year: state.year,
    month: state.month
  };
};

export default connect(mapStateToProps)(CalendarMonth);