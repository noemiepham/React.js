import { useState } from "react";
import "../PopUp/popup.css";
import "../Configurateur/Configurateur";
import Fireworks from "./Firework";
export default function PopUp() {
  const [click, setClick] = useState(true);
  function handleClick() {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  }
  return (
    <div className="container">
      <button onClick={handleClick}>Click to Suprise</button>
      <div
        className="configur"
        style={click ? { visibility: "hidden" } : { visibility: "visible" }}
      >
        <Fireworks />
      </div>
      <div
        className="lds-spinner"
        style={click ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
