import "./Footer.css";
import whatsapp from "../../assets/images/whatsapp.png";
import instagram from "../../assets/images/insta-amarillo.png";

export const Footer = () => {
  return (
    <footer>
      <nav>
        <ul className="footer-list">
          <li>
            <img src={whatsapp} alt="Whatsapp" />
          </li>
          <li>
            <img src={instagram} alt="Instagram" />
          </li>
        </ul>
      </nav>
    </footer>
  );
};
