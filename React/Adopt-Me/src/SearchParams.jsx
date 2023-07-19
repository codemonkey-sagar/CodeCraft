import { useState } from "react";

//custom hook to manage a counter
function useCounter(initialCount = 0, step = 1) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((previousCount) => previousCount + step);
  };

  const decrement = () => {
    setCount((previousCount) => previousCount - step);
  };

  return { count, increment, decrement };
}

function Counter() {
  const { count, increment, decrement } = useCounter(0, 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
