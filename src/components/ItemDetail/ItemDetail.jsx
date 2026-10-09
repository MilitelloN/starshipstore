import { Item } from "../Item/Item";
import "./ItemDetail.css";
import carrito from "../../assets/images/carrito.png";
import { useCart } from "../../context/CartContext";

export const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  return (
    <div className="detalle-producto">
      <Item {...item}>
        <button className="btn" onClick={() => addItem(item)}>
          Agregar al carrito
          <img src={carrito} alt="" />
        </button>
      </Item>
    </div>
  );
};
