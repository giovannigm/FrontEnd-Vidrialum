import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import imgEmpresa from "../../../assets/Logo.png";
import { FaRegBuilding } from "react-icons/fa6";
import { IoHomeOutline, IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineBuild } from "react-icons/md";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      custom805: 805,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

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

  // Menú para Collapse (mobile)
  const collapseMenu = (
    <Collapse in={showMenu} timeout="auto" unmountOnExit>
      <Box
        sx={{
          position: "absolute",
          top: "48px", // Altura del AppBar (ajusta si tu AppBar es más alto)
          right: 0,
          width: 160,
          bgcolor: "#585858",
          borderRadius: 2,
          boxShadow: 3,
          zIndex: 1201,
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/" onClick={handleLinkClick}>
              <ListItemIcon>
                <IoHomeOutline size={24} style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavigateAndScroll("Nosotros-Container")}
            >
              <ListItemIcon>
                <FaRegBuilding size={24} style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Empresa" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavigateAndScroll("Servicios-Container")}
            >
              <ListItemIcon>
                <MdOutlineBuild size={24} style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Servicios" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/Contacto"
              onClick={handleLinkClick}
            >
              <ListItemIcon>
                <IoChatbubblesOutline size={24} style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Contacto" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Collapse>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#585858", boxShadow: 0 }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: 2, minHeight: 48 }}>
          {/* Logo y nombre alineados a la izquierda */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link
              to="/"
              onClick={handleLinkClick}
              style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
            >
              <h1 style={{ color: "white", margin: 0, marginRight: 16 }}>
                VIDRIALUM
              </h1>
              <img
                src={imgEmpresa}
                alt="Imagen de empresa"
                style={{ height: 35, width: 35 }}
              />
            </Link>
          </Box>
          {/* Menú desktop y hamburguesa alineados a la derecha */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Menú desktop */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  custom805: "flex",
                },
                gap: 2,
              }}
            >
              <Link
                to="/"
                onClick={handleLinkClick}
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  fontFamily: "open sans",
                  padding: "3px 12px",
                }}
              >
                <IoHomeOutline
                  size={25}
                  style={{ marginRight: 8, color: "white" }}
                />
                Inicio
              </Link>
              <a
                type="button"
                onClick={() => handleNavigateAndScroll("Nosotros-Container")}
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  fontFamily: "open sans",
                  padding: "3px 12px",
                  cursor: "pointer",
                }}
              >
                <FaRegBuilding
                  size={25}
                  style={{ marginRight: 8, color: "white" }}
                />
                Empresa
              </a>
              <a
                type="button"
                onClick={() => handleNavigateAndScroll("Servicios-Container")}
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  fontFamily: "open sans",
                  padding: "3px 12px",
                  cursor: "pointer",
                }}
              >
                <MdOutlineBuild
                  size={25}
                  style={{ marginRight: 8, color: "white" }}
                />
                Servicios
              </a>
              <Link
                to="/Contacto"
                onClick={handleLinkClick}
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  fontFamily: "open sans",
                  padding: "3px 12px",
                }}
              >
                <IoChatbubblesOutline
                  size={25}
                  style={{ marginRight: 8, color: "white" }}
                />
                Contacto
              </Link>
            </Box>
            {/* Menú hamburguesa mobile */}
            <IconButton
              color="inherit"
              aria-label={showMenu ? "close drawer" : "open drawer"}
              edge="end"
              onClick={handleMenuClick}
              sx={{ display: { xs: "block", custom805: "none" } }}
            >
              {showMenu ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            {/* Collapse menu mobile debajo del navbar */}
            <Box
              sx={{
                display: { xs: "block", custom805: "none" },
                width: "100%",
              }}
            >
              {collapseMenu}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
