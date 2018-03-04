import React from 'react';
import ReactDOM from 'react-dom';

export default class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render () {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        <h3>We're going to the <i className="em em-waning_crescent_moon"></i></h3>
        {/* <h3>PANIC!!! SELL, SELL, SELL! <i class="em em-scream"></i></h3> */}
      </div>
    );
  }
}