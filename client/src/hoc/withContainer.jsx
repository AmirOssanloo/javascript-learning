import React, {Component} from 'react';
import {TimelineMax, TweenMax} from 'gsap';

const withContainer = (WrappedComponent) => {
  class HOC extends Component {
    constructor(props) {
      super(props);

      this.state = {
        componentIsMounted: true
      }

      this.timelineIn = new TimelineMax({paused: true});
      this.timelineOut = new TimelineMax({
        onComplete: this.componentOutComplete,
        paused: true
      });
    }

    componentDidMount() {
      this.timelineIn.play();
    }

    componentOutComplete() {
      this.setState({componentIsMounted: false});
    }

    render() {
      let component = this.state.componentIsMounted
        ? <WrappedComponent 
            timelineIn={this.timelineIn}
            timelineOut={this.timelineOut}
            {...this.props} /> : null;

      return (
        <React.Fragment>
          {component}
        </React.Fragment>
      );
    }
  }

  return HOC;
}

export default withContainer;