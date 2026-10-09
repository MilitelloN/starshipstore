import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  if (!products.length) return <p>No hay productos</p>;

  return (
    <div className="contenedor-tarjetas">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="card-link">
          <Item {...product} />
        </Link>
      ))}
    </div>
  );
};
