import "../Home/home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <nav>
        <ul>
          <li>
            <Link to="compteurs">Compteurs</Link>
          </li>
          <li>
            <Link to="Selections">Selections</Link>
          </li>
          <li>
            <Link to="Carousels">Carousels</Link>
          </li>
          <li>
            <Link to="Configurateur">Configurateur</Link>
          </li>
          <li>
            <Link to="PopUp">PopUp</Link>
          </li>
          <li>
            <Link to="Currency">Currency</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
