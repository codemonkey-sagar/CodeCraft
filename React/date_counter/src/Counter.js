import { useState } from "react";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div>
        <input type="range" min="0" max="10" value={step} onChange={e => setStep(Number(e.target.value))} />
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={() => setCount(count => count - step)}>-</button>
        <input type="text" value={count} onChange={e => setCount(Number(e.target.value))} />
        <button onClick={() => setCount(count => count + step)}>+</button>
      </div>

      <p>
        <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}</span>
        <span>{date.toDateString()}</span>
      </p>

      {(step !== 1 || count !== 0) ? <div>
        <button onClick={handleReset}>Reset</button>
      </div> : null}

    </div>
  )
};

export default Counter;