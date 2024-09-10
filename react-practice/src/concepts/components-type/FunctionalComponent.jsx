import React from "react";

// Greet Component
const Greet = () => {
  return <h1>Hello Geek</h1>;
};

function FunctionalComponent(props) {
  return (
    <div>
      FunctionalComponent
      <p>{props.message}</p>
      {/* Component inside Component */}
      <Greet />
    </div>
  );
}

export default FunctionalComponent;
