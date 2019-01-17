import React, {Component} from 'react';
import store from '../../store/store';

class CalendarDay extends Component {
  constructor(props) {
    super(props);
  }

  onCellClick() {
    let date = new Date(store.getState().year, store.getState().month, this.props.date);
    console.log(date);
  }

  render() {
    return (
      <td onClick={this.onCellClick.bind(this)}>{this.props.date}</td>
    );
  }
}

export default CalendarDay;