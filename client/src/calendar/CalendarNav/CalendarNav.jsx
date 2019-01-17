import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ViewType from '../../store/types/views';
import ActionType from '../../store/types/actions';

class CalendarNav extends Component {
  constructor(props) {
    super(props);
  }

  onTestClick(e) {
    axios.get('/api/test')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onFestClick(e) {
    axios.get('/api/fest')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let yearNav = (
      <div>
        <button onClick={this.props.onPrevYear}>PREV</button>
        <span onClick={() => this.props.onSetView(ViewType.YEAR)}>{this.props.year}</span>
        <button onClick={this.props.onNextYear}>NEXT</button>
      </div>
    );

    let monthNav = (
      <div>
        <div>
          <button onClick={this.props.onPrevMonth}>PREV</button>
          <span>{this.props.month}</span>
          <button onClick={this.props.onNextMonth}>NEXT</button>
        </div>
      </div>
    );

    let calendarType = (this.props.view === ViewType.YEAR) ? {yearNav} : {monthNav};

    return (
      <div>
        <button onClick={this.onTestClick}>TeeEST</button>
        <button onClick={this.onFestClick}>FeeEST</button>
        {yearNav}
        {monthNav}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    view: state.view,
    year: state.year,
    month: state.month,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPrevYear: () => dispatch({type: ActionType.PREV_YEAR}),
    onNextYear: () => dispatch({type: ActionType.NEXT_YEAR}),
    onPrevMonth: () => dispatch({type: ActionType.PREV_MONTH}),
    onNextMonth: () => dispatch({type: ActionType.NEXT_MONTH}),
    onSetView: (view) => dispatch({type: ActionType.SET_VIEW, value: view})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarNav);