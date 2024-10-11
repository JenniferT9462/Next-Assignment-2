import { useState } from 'react';

export default function MyCounterApp() {
  const [count, setCount] = useState(0);
  //Set the state for the inputs
  const [inputValue, setInputValue] = useState('');
  //Function to increase count by 1
  function increment() {
    setCount(count + 1)
  };
  function decrement() {
    //Math.max to set the decrement with a max of 0
    setCount(Math.max(count - 1, 0)) 
  };
  //Arrow function to reset count to 0
  const reset = () => {
    setCount(0);
  };
  function doubleIncrement() {
    setCount(count + count)
  };
  function doubleDecrement() {
    setCount(count - count)
  };
  //Set the input value to the count
  function handleIncrementInput(e) {
    setInputValue(e.target.value);
  }
  function handleIncrement() {
    const valueToAdd = Number(inputValue)
    setCount(count + valueToAdd);
    setInputValue('');
  }
  
  
  return (
      <div>
        <h1>My Counter App</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <br/>
        <button onClick={doubleIncrement}>Double Increment</button>
        <button onClick={doubleDecrement}>Double Decrement</button>
        <br/>
        <input
          onChange={handleIncrementInput}
        />
        <button onClick={handleIncrement}>Increment</button>
        
        <button onClick={reset}>Reset</button>
      </div>
    )
};

