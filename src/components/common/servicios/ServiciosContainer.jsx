import Servicios from "./Servicios";
import "./Servicios.scss";

const ServiciosContainer = () => {
  return (
    <>
      <article className="ServiciosContainer" id="Servicios-Container">
        <h2 className="tituloServicios">Servicios</h2>
        <div className="servicios-cont">
          <Servicios />
        </div>
      </article>
    </>
  );
};

export default ServiciosContainer;
