import { useState, useReducer } from "react";
import './App.css';




function App() {

  
  const [quantity, setQuantity] = useState(0);

  const setQuantityPlusOne = (): void => {
    setQuantity(quantity + 1);
  }
  const setQuantityMinusOne = (): void => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  const reducer = (state: any, action: any) => {
    //is the type is necessary?

    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1 }
    }
  
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // count where to define?

  const increment = () => {
    dispatch({ type: 'increment' })
  }

  const decrement = ()=> {
    if (state?.count > 0) {
      dispatch({ type: 'decrement' })
    }
  }

  return (
    <div className="App">
      <div>Counter with userState</div>
      <div>
        <button onClick={setQuantityMinusOne}>
          -
        </button>
        <button >
          {quantity}
        </button>
        <button onClick={setQuantityPlusOne}>
          +
        </button>
      </div>


      <div>Counter with useReducer</div>
      <div>
        <button onClick={decrement}>
          -
        </button>
        <button >
          {state?.count}
        </button>
        <button onClick={increment}>
          +
        </button>
      </div>
    </div>

  );
}

export default App;
