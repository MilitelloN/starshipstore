import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar los productos");
        return res.json();
      })
      .then((data) => {
        if (category) {
          const itemsFiltered = data.filter(
            (element) => element.category === category,
          );
          setProducts(itemsFiltered);
        } else setProducts(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h1>Starship store</h1>
      <h2>Nuestros productos</h2>
      <ul className="filtro-categorias">
        <li>
          <NavLink to={"/"} end>
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink to={"/products/imperial"}>imperial</NavLink>
        </li>
        <li>
          <NavLink to={"/products/rebel"}>Rebelde</NavLink>
        </li>
        <li>
          <NavLink to={"/products/republic"}>Republica</NavLink>
        </li>
      </ul>
      <ItemList products={products} />
    </section>
  );
};
