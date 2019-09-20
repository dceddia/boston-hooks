// This one actually works.

import React from 'react';
import createClass from 'create-react-class';
import ReactDOM from 'react-dom';

var Counter = createClass({
  getInitialState: function() {
    return {
      count: 1
    }
  },
  increment: function() {
    this.setState({
      count: this.state.count + 1
    })
  },
  decrement: function() {
    this.setState({
      count: this.state.count - 1
    })
  },
  render: function() {
    return (
      <div>
        Count is {this.state.count}
        <button onClick={this.increment}>Plus</button>
        <button onClick={this.decrement}>Minus</button>
      </div>
    )
  }
})

ReactDOM.render(
  <Counter/>,
  document.querySelector('#root')
);

