import React, {useState} from "react";

function App() {
  const [heading, setHeading] = useState("hello");
  const [isMouseOver, setMouseOver] = useState (false)
  function headingSub(){
    setHeading("Input here")
  }
  function handleMouseOver(){
    setMouseOver(true)
  }
  function handleMouseOut(){
    setMouseOver(false)
  }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
      onClick={headingSub}
      style = {{backgroundColor: isMouseOver ? "black":"white"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >Submit</button>
    </div>
  );
}

export default App;
