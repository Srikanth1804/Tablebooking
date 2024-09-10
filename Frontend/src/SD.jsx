import React, { useReducer } from "react";

// Reducer function
let reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return { ...state, count: state.count + 1 };
    case "Sub":
      return { ...state, count: state.count - 1 };
    default:
      return state; // Return the current state if no action matches
  }
};

const SD = () => {
  // Initialize state and dispatch with useReducer
  let [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      {/* Dispatching actions through the onClick handler */}
      <button onClick={() => dispatch({ type: "Add" })}>+</button>
      <p>{state.count}</p> {/* Display the count from state */}
      <button onClick={() => dispatch({ type: "Sub" })}>-</button>
    </div>
  );
};

export default SD;
