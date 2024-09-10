import React, { Component, PureComponent } from "react";

class Test extends PureComponent {
  render() {
    return <h1>I am From Pure Component..</h1>;
  }
}

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrease() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        ClassComponent
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrease.bind(this)}>Increse</button>
        <Test />
      </div>
    );
  }
}

export default ClassComponent;
