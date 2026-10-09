import { Item } from "../Item/Item";
import "./ItemDetail.css";
import carrito from "../../assets/images/carrito.png";

export const ItemDetail = ({ item }) => {
  return (
    <div className="detalle-producto">
      <Item {...item}>
        <button className="btn">
          Agregar al carrito
          <img src={carrito} alt="" />
        </button>
      </Item>
    </div>
  );
};
