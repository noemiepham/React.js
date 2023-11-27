import { useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function Add(add) {
    if (count1 > 0 || count1 < 9) {
      setCount1((c) => c + 1);
    }
  }
  function Sub(add) {
    if (count1 > 0) {
      setCount1((c) => c - 1);
    }
  }

  return (
    <div className="App">
      <div>
        <p>COMPTEUR 1</p>
        <button
          style={
            count1 < 0 || count1 + count2 >= 18
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
          onClick={Sub}
        >
          -
        </button>
        <span>{count1}</span>
        <button
          style={
            count1 > 9 || count1 + count2 >= 18
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
          onClick={Add}
        >
          +
        </button>
      </div>
      <div>
        <p>COMPTEUR 2</p>
        <button
          style={
            count1 < 0 || count1 + count2 >= 18
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
          onClick={() => setCount2((c) => c + 1)}
        >
          -
        </button>
        <span>{count2}</span>
        <button
          style={
            count1 > 9 || count1 + count2 >= 18
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
          onClick={() => setCount2((c) => c + 1)}
        >
          +
        </button>
      </div>
      <div>
        <p>TOTAL</p>
        <span>{count1 + count2}</span>
      </div>
    </div>
  );
}

export default App;
