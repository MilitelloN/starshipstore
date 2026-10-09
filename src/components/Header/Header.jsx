import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import logo from "../../assets/images/logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="div-logo">
        <Link to={"/"} className="logo">
          <img src={logo} alt="Logo de la pagina web" />
          <p>Starship store</p>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
