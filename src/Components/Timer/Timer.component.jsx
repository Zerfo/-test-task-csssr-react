import React from "react";

import Interval from "../Interval";

class Timer extends React.Component {
  interval = null;
  state = {
    currentTime: 0
  };

  handleStart = () => {
    this.interval = setInterval(
      () =>
        this.setState({
          currentTime: this.state.currentTime + this.props.currentInterval
        }),
      this.props.currentInterval * 1000
    );
  };

  handleStop = () => {
    clearInterval(this.interval);
    this.setState({ currentTime: 0 });
  };

  render() {
    return (
      <div>
        <Interval />
        <div>Секундомер: {this.state.currentTime} сек.</div>
        <div>
          <button onClick={this.handleStart}>Старт</button>
          <button onClick={this.handleStop}>Стоп</button>
        </div>
      </div>
    );
  }
}

export default Timer;
