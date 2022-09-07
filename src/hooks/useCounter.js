import { useState } from "react"


export const useCounter = ( initialValue = 10) => {
  
  const [counter, setCounter] = useState( initialValue );
  
  const increment = ( value = 1 ) => {
    setCounter(counter + value);
  }  

  const decrement = ( value = 2 ) => {
    // Avoid counter shows a negative number:
    if (counter === 0) return
    setCounter(counter - value);
  }

  const reset = () => {
    setCounter(initialValue);
  }


  // We return an object, so we use {}
  return {
    counter,
    increment,
    decrement,
    reset
  }
}
