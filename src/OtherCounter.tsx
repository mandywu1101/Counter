import { useState, useReducer, useCallback } from "react";
import "./App.css";

export default function OtherCounter() {
  type Dog = { count: number; trial: number };
  type UserAction =
    | { type: "increment" }
    | { type: "decrement" }
    | { type: "nothing" };

  const chihuahua: Dog = { count: 0, trial: 0 };
  const reducer = (state: Dog, action: UserAction) => {
    //whats the type of state and action?

    switch (action.type) {
      case "increment":
        return { count: state.count + 1, trial: state.trial + 1 };
      case "decrement":
        return { count: state.count - 1, trial: state.trial + 1 };
      case "nothing":
        return { ...state, trial: state.trial + 1 };
    }
  };

  const [state, dispatch] = useReducer(reducer, chihuahua);
  //  state refer to count and dispatch refer to the actions inside the reducer function?

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    if (state?.count > 0) {
      dispatch({ type: "decrement" });
    }
  };

  return (
    <div>
      <div>Counter with useReducer</div>
      <div>
        <button onClick={decrement}>-</button>
        <button>{state.count}</button>
        <button>{state.trial}</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
