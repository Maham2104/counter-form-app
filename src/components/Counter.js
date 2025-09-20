import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>{"\u2795"} Increase</button>
      <button onClick={() => setCount(count - 1)}> {"\u2796"} Decrease</button>
      <button onClick={() => setCount(0)}>{"\u{1F501}"} Reset</button>
    </div>
  );
}

export default Counter;
