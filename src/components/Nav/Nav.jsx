import { Link } from "react-router-dom";
import "./Nav.css";
import carrito from "../../assets/images/carrito.png";

export const Nav = () => {
  return (
    <nav className="header-nav">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/cart"}>
            Carrito <img src={carrito} alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
