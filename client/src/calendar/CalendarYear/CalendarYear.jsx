import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewType from '../../store/types/views';
import ActionType from '../../store/types/actions';
import CalendarMonthCell from '../CalendarMonthCell/CalendarMonthCell';

class CalendarYear extends Component {
  constructor(props) {
    super(props);

    this.state = {
      months: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
    }
  }

  onMonthClick(month) {
    this.props.onSetView(ViewType.MONTH);
    this.props.onSetMonth(month);
  }

  // While there are months, yield the next
  *getMonth() {
    let index = 0;

    while (index < 12)
      yield index++;
  }

  render() {
    let myGen = this.getMonth();
    let rows = [];
    
    // Create Rows & cells
    for (let i = 0; i < 3; i++) {
      let cells = [];
      
      for (let j = 0; j < 4; j++) {
        let month = myGen.next();
        cells.push(
          <td key={i + j} onClick={() => this.onMonthClick(month.value)}>
            {this.state.months[month.value]}
          </td>
        );
      }

      rows.push(<tr key={i}>{cells}</tr>);
    }

    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    view: state.view,
    month: state.month
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetMonth: (index) => dispatch({type: ActionType.SET_MONTH, value: index}),
    onSetView: (view) => dispatch({type: ActionType.SET_VIEW, value: view})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarYear);