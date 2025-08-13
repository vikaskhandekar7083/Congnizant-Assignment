import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.sayHello = this.sayHello.bind(this);
  }

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  }

  decrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  }

  sayHello() {
    alert('Hello! You clicked increment.');
  }

  handleIncrement = () => {
    this.increment();
    this.sayHello();
  }

  render() {
    return (
      <div style={{ marginBottom: 20 }}>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>{' '}
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
