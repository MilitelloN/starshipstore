import { Link } from "react-router-dom";
import "./Nav.css";
import carrito from "../../assets/images/carrito.png";
import { useCart } from "../../context/CartContext";

export const Nav = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  return (
    <nav className="header-nav">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/cart"}>
            Carrito <img src={carrito} alt="" />
            {totalItems > 0 && <span>{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
