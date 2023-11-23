import React from 'react'
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    let counter =  0
    const addValue = ()=>{
       setCount(counter+=1);
       console.log(counter)
    }
    const decreaseValue = ()=>{
      setCount(counter-=1);
      console.log(counter)
   }
    return(
      <>
        <h1>Counter Value: {count}</h1>
        <button onClick={addValue}>Increment</button>
        <button onClick={decreaseValue}>Decrement</button>
      </>
    )
}

export default Counter
