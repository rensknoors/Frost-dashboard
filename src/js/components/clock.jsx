import React from 'react';

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
        <h3>We're going to the &#127768;</h3>
        {/* <h3>PANIC! SELL, SELL, SELL! &#128059;</h3> */}
      </div>
    );
  }
}