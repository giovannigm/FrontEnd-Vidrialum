import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import imgEmpresa from "../../../assets/Logo.png";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
    window.scrollTo(0, 0); // Desplazar hacia arriba
  };

  return (
    <header>
      <Link to={"/"} className="tituloNavbar">
        <h1>VIDRIALUM</h1>
        <img src={imgEmpresa} alt="Imagen de empresa" />
      </Link>
      <nav>
        <div id="menuIcon" onClick={handleMenuClick}>
          &#9776;
        </div>
        <ul className={`list-nav ${showMenu ? "show-menu" : ""}`}>
          <li>
            <Link to={"/"} onClick={handleLinkClick}>
              <FaHome size={30} /> {/* Es la imagen que aparece alado */}
              Inicio
            </Link>
          </li>
          <li>
            <a href="#Nosotros-Container">
              <FaPeopleCarryBox size={30} />
              {/* Es la imagen que aparece alado */}
              Nosotros
            </a>
          </li>
          <li>
            <a href="#Servicios-Container">
              <FaPeopleCarryBox size={30} />
              {/* Es la imagen que aparece alado */}
              Servicios
            </a>
          </li>
          <li>
            <Link to={"/Contacto"} onClick={handleLinkClick}>
              <IoChatbubblesOutline size={30} />{" "}
              {/* Es la imagen que aparece alado */}
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
