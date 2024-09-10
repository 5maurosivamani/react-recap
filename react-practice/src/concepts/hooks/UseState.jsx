import React, { useState } from "react";

function UseState() {
  // useState hook
  const [count, setCount] = useState(0);

  //  handleClick event handlers
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>UseState</h3>
      <button onClick={handleClick}>{count} +</button>
    </div>
  );
}

export default UseState;
