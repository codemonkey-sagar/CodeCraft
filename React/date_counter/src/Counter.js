import { useState } from "react";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep(step => step - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep(step => step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount(count => count - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount(count => count + step)}>+</button>
      </div>

      <p>
        <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}</span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  )
};

export default Counter;