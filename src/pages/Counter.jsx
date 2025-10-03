import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "./../slice/countSlice";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);

  const increment = () => {
    dispatch(counterAction.incrCount());
  };

  const decrement = () => {
    dispatch(counterAction.decrCount());
  };

  const add = (x) => {
    dispatch(counterAction.addCount(x));
  };

  const reset = () => {
    dispatch(counterAction.initCount());
  };

  return (
    <div>
      <h2>Counter Demo</h2>
      <p>{counter}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => add(50)}>Add</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default Counter;
