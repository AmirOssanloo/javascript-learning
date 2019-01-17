import React, {Component} from 'react';

class CalendarDay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <td>{this.props.status}</td>
    );
  }
}

export default CalendarDay;