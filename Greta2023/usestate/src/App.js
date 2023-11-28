import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compteurs from "./Components/Compteurs/Compteurs";
import Selections from "./Components/Selections/Selecters";
import Carousels from "./Components/Selections/Components/Carousels/Carousels";
import Configurateur from "./Components/Configurateur/Configurateur";
import PopUp from "./Components/PopUp/Popup";
import Home from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="compteurs" element={<Compteurs />} />
        <Route path="Selections" element={<Selections />} />
        <Route path="Carousels" element={<Carousels />} />
        <Route path="Configurateur" element={<Configurateur />} />
        <Route path="PopUp" element={<PopUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
