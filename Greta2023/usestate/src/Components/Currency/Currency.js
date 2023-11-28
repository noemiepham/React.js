import "../Currency/currency.css";
import "../Configurateur/configurateur.css";
import { useState } from "react";

export default function Currency() {
  const [dola, setDola] = useState("");
  const [euro, setEuro] = useState("");
  function handleChange() {
    if (dola > 0) {
      setDola(euro * 1.1);
    } else if (dola > 0) {
      setEuro(euro * 0.9);
    }
  }
  return (
    <div className="configurateur" onSubmit={handleChange}>
      <div>
        <p className="configTitle">Change your money</p>
      </div>
      <div>
        <div className="configNo">
          <input
            placeholder="entrez un chiffe"
            type="text"
            value={euro}
            onChange={(event) => {
              setEuro(event.target.value);
              setDola((event.target.value * 1.2).toFixed(2));
            }}
          />
          <span>€</span>
        </div>
        <div className="configNo">
          <input
            placeholder="entrez un chiffe"
            type="text"
            value={dola}
            onChange={(event) => {
              setEuro((event.target.value * 1.2).toFixed(2));
              setDola(event.target.value);
            }}
          />
          <span> $</span>
        </div>
      </div>
      {/*   <div>
        <p className="configTitle">2-Choisis ta selle</p>
        <span className="configNo" onClick={() => setModelSell(20)}>
          Classique(<span>20</span> Euro)
        </span>
        <span className="configNo" onClick={() => setModelSell(80)}>
          Sur suspension(<span>80</span> Euro)
        </span>
      </div>
      <div>
        <p className="configTitle">
          Prix Final <span>{model + selle} </span>
        </p>
      </div> */}
    </div>
  );
}
