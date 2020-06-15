import React, { useState } from "react";
import Message from "./components/message";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);

  return (
    <div className={`box ${isMorning ? "day" : "night"}`}>
      <button onClick={() => setMorning(!isMorning)}>Switch Morning</button>
      <Message count={count} />
      <button type="button" onClick={() => setCount(++count)}>
        Click
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;
