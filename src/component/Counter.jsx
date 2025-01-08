import React, { useState } from 'react';

function Counter() {
  const [counte, setCount] = useState(0);
  console.log('rendering');
  return (
    <div>
      <p>{counte}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>incrrement</button>
      <button onClick={() => setCount((prev) => prev - 1)}>decrrement</button>
    </div>
  );
}

export default Counter;
