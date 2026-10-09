import "./Item.css";

export const Item = ({ name, price, description, img, alt, children }) => {
  return (
    <article className="card">
      <img src={img} alt={alt} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="precio">ᖬ{price}</p>

      {children}
    </article>
  );
};
