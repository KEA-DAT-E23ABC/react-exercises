import { useState } from "react";
import "../assets/css/state.css";

export default function StatePage() {
  return (
    <div className="container">
      <h1>State</h1>
      <p>
        State is used to manage data that changes over time. When the state
        changes, the component re-renders.
      </p>
      <StateComponent />
    </div>
  );
}

function StateComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
