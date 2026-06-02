import { useState } from "react";

const buttonStyle = {
  margin: "5px 10px",
};

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function handleIncrement(): void {
    setCount(count + 1);
  }
  function handleDecrement(): void {
    setCount(count - 1);
  }

  return (
    <div className="counter-container">
      <p>Count: {count}</p>
      <button style={buttonStyle} onClick={handleIncrement}>
        Increment
      </button>
      <button style={buttonStyle} onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}
