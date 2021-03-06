import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  state = {
    count: 1
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        Count is {this.state.count}
        <button onClick={this.increment}>Plus</button>
        <button onClick={this.decrement}>Minus</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter/>,
  document.querySelector('#root')
);

