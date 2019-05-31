import React from "react";

class Interval extends React.Component {
  render() {
    const { currentInterval, changeInterval } = this.props;
    return (
      <div>
        <span>Интервал обновления секундомера: {currentInterval} сек.</span>
        <span>
          <button onClick={() => changeInterval(-1)}>-</button>
          <button onClick={() => changeInterval(1)}>+</button>
        </span>
      </div>
    );
  }
}

export default Interval;
