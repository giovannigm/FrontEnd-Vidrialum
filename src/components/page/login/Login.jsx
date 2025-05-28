import { useState } from "react";
import "./Login.scss"; // Importa los estilos
import img from "/tabImage.png";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [username, setUsername] = useState(""); // Campo de usuario
  const [password, setPassword] = useState(""); // Campo de contraseña
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div style={{ textAlign: "center" }}>
          <img src={img} alt="Logo empresa" id="imagen-login" />
        </div>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ flex: 1 }}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                marginLeft: "-30px",
                outline: "none",
                fontSize: "1.2em",
              }}
              aria-label={
                showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
              }
              tabIndex={0}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
