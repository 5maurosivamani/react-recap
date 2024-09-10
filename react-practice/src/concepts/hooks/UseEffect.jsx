import React, { useEffect } from "react";

function UseEffect() {
  useEffect(() => {
    console.log("Mounting...");
  });

  return (
    <div>
      <h3>UseEffect</h3>
      {console.log("Rendered..")}
    </div>
  );
}

export default UseEffect;
