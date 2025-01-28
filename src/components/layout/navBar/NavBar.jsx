import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import ImgLogout from "../../../assets/Logout.png";
// import { useAuth } from "../../contexts/AuthContext";
import "./Navbar.css";
import imgEmpresa from "../../../assets/Logo.png";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const navigate = useNavigate(); // Hook para navegación programática

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  // const handleSwitchClick = () => {
  //   document.body.classList.toggle("dark");
  //   setIsDarkMode(!isDarkMode);
  // };

  const handleNavLinkClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href").substring(1);
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    navigate("/"); // Navegar a la ruta raíz
    window.scrollTo(0, 0); // Desplazar la página hacia arriba
  };

  return (
    <header>
      <a to={"/"} onClick={handleHomeClick} className="tituloNavbar">
        <h1>VIDRIALUM</h1>
        <img src={imgEmpresa} alt="Imagen de empresa" />
      </a>
      <nav>
        <div id="menuIcon" onClick={handleMenuClick}>
          &#9776;
        </div>
        <ul className={`list-nav ${showMenu ? "show-menu" : ""}`}>
          <li>
            <a to={"/"} onClick={handleHomeClick}>
              <FaHome size={30} />
              Inicio
            </a>
          </li>
          <li>
            <a href="#About" onClick={handleNavLinkClick}>
              <FaPeopleCarryBox size={30} />
              Nosotros
            </a>
          </li>
          {/* <li>
            <a href="#Certifications" onClick={handleNavLinkClick}>
              Certifications
            </a>
          </li> */}
          {/* <li>
            <a href="#Repositories" onClick={handleNavLinkClick}>
              Repositories
            </a>
          </li> */}
          <li>
            <a href="#Footer" onClick={handleNavLinkClick}>
              <IoChatbubblesOutline size={30} />
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      {/* {!!token && (
        <button className="button-logout" onClick={handleLogout}>
          <img src={ImgLogout} alt="Logout" />
        </button>
      )} */}

      {/* <button
        className={`switch ${isDarkMode ? "active" : ""}`}
        id="switch"
        onClick={handleSwitchClick}
        aria-label="Cambiar modo"
      >
        <span>
          <i
            className={`bx bxs-sun bx-burst ${isDarkMode ? "hidden" : ""}`}
          ></i>
        </span>
        <span>
          <i
            className={`bx bxs-moon bx-burst ${isDarkMode ? "" : "hidden"}`}
          ></i>
        </span>
      </button> */}
    </header>
  );
};

export default NavBar;
