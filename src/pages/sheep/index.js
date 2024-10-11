import { useState } from 'react';

export default function MyCounterApp() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1)
  }
  
  function decrement() {
    setCount(Math.max(count - 1, 0))
  }
    return (
      <div>
        <h1>My Counter App</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    )
}

