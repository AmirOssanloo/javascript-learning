import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewType from '../store/types/views';
import CalendarMonth from './CalendarMonth/CalendarMonth';
import CalendarNav from './CalendarNav/CalendarNav';
import CalendarYear from './CalendarYear/CalendarYear';

class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let calendarType = (this.props.view === ViewType.YEAR) ? <CalendarYear /> : <CalendarMonth />;

    return (
      <div>
        <h1>Calendar</h1>
        <div>
          <CalendarNav />
          {calendarType}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    view: state.view,
    year: state.year,
  };
};

export default connect(mapStateToProps)(Calendar)