import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import imgEmpresa from "../../../assets/Logo.png";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
    window.scrollTo(0, 0); // Desplazar hacia arriba
  };

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setShowMenu(false);
  };

  const handleNavigateAndScroll = (sectionId) => {
    navigate("/"); // Navegar a la página de inicio
    setTimeout(() => handleScrollToSection(sectionId), 100); // Esperar un momento para que la página cargue
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
            <a
              type="button"
              onClick={() => handleNavigateAndScroll("Nosotros-Container")}
            >
              <FaPeopleCarryBox size={30} />
              Empresa
            </a>
          </li>
          <li>
            <a
              type="button"
              onClick={() => handleNavigateAndScroll("Servicios-Container")}
            >
              <FaPeopleCarryBox size={30} />
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
