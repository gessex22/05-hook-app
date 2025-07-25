import { useState } from "react";

export const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = ( value = 1 ) => {
    setCounter(counter + value);
  };

  const decrease = () => {

  if (counter === 0) return
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return { counter, increment, decrease, reset };
};
