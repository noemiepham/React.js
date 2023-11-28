import { useState } from "react";
import "../Configurateur/configurateur.css";

export default function Configurateur() {
  const [model, setModel] = useState(0);
  const [selle, setModelSell] = useState(0);

  return (
    <div className="configurateur">
      <div>
        <p className="configTitle">Configure Ton Velo</p>
      </div>
      <div>
        <p className="configTitle">1-Choisis un modèle</p>
        <span className="configNo" onClick={() => setModel(500)}>
          Vélo de ville(<span>500</span> Euro)
        </span>
        <span className="configNo" onClick={() => setModel(700)}>
          Mountain Bike(<span>700</span> Euro)
        </span>
      </div>
      <div>
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
      </div>
    </div>
  );
}
