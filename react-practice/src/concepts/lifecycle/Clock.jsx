import React, { Component } from "react";

class Clock extends Component {
  // 1. Initialization
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      hello: "World!",
    };
  }

  //   static getDerivedStateFromProps(props, state) {
  //     return { hello: props.greet };
  //   }

  componentDidMount() {
    this.setState({ hello: "Geeks!" });
  }

  // Defining the componentWillUnmount method
  componentWillUnmount() {
    console.log("The component is going to be unmounted");
  }

  render() {
    return (
      <div>
        <h1>
          GeeksForGeeks.org, Hello
          {this.state.hello}
        </h1>

        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20230804133715/gfg.png"
          alt="lifecycle"
        />
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
}

export default Clock;
