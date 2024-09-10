import { useState } from "react";
import "./App.css";
import {
  ClassComponent,
  Clock,
  FunctionalComponent,
  UseState,
} from "./concepts";
import UseEffect from "./concepts/hooks/UseEffect";

function App() {
  const [isShow, setShow] = useState(true);

  console.log("re-rendered");
  return (
    <div className="App">
      <ClassComponent />
      {/* <FunctionalComponent message="Have a Nice Day!" /> */}

      {/* Another way to call Functional Component */}
      {FunctionalComponent({ message: "Have a Nice Day!!" })}

      {/* Hooks */}
      <UseState />
      <UseEffect />

      {/* LifeCycle */}
      {isShow ? <Clock greet="Have a nice Day!" /> : null}

      {/* Toggle Show/Hide */}
      <button onClick={() => setShow(!isShow)}>Toggle Show/Hide</button>
    </div>
  );
}

export default App;
