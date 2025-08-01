import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const limit = 10;

  const increase = () => {
    if (count < limit) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>Click Counter App</h1>
      <h2>{count}</h2>
      {count === limit && <p className="limit-msg">You've reached the limit!</p>}
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease} disabled={count === 0}>Decrease</button>
      </div>
    </div>
  );
}

export default Counter;
