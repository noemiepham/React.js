import React from "react";
import { useState } from "react";
import "./selection.css";

export default function Selection() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="selecteursContainer">
      <span>Votre choix</span>
      <div
        onClick={() => setSelected(0)}
        className={selected === 0 ? "orange" : "green"}
      ></div>
      <div
        onClick={() => setSelected(1)}
        className={selected === 1 ? "orange" : "green"}
      ></div>
      <div
        onClick={() => setSelected(2)}
        className={selected === 2 ? "orange" : "green"}
      ></div>
    </div>
  );
}
