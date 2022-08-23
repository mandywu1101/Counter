import { useState } from "react";
import "./App.css";
import OtherCounter from "./OtherCounter";

function App() {
  const [quantity, setQuantity] = useState(0);

  const setQuantityPlusOne = () =>
    setQuantity((a) => {
      return a + 1;
    });

  const setQuantityMinusOne = () =>
    setQuantity((oldQuantity) => {
      if (oldQuantity > 0) {
        return oldQuantity - 1;
      } else {
        return oldQuantity;
      }
    });

  return (
    <div className="App">
      <div>Counter with userState</div>
      <div>
        <button onClick={setQuantityMinusOne}>-</button>
        <button>{quantity}</button>
        <button onClick={setQuantityPlusOne}>+</button>
      </div>

      <OtherCounter />
    </div>
  );
}

export default App;
