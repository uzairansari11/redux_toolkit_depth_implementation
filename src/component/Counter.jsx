import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  countSelector,
  incrementByValue,
} from "../globalState/feature/counter/counterSlice";
const Counter = () => {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();
  return (
    <div>
      {/* Counter value from redux store */}
      <div id="counterDiv">Counter Value : {count}</div>

      {/* Increment Button */}
      <button className="buttonClass" onClick={() => dispatch(increment())}>
        Increment Count Value
      </button>
      {/* Decrement Button */}

      <button className="buttonClass" onClick={() => dispatch(decrement())}>
        Decrement Count Value
      </button>
      <button
        className="buttonClass"
        onClick={() => dispatch(incrementByValue(5))}
      >
        incrementByValue Count
      </button>
    </div>
  );
};

export default Counter;
