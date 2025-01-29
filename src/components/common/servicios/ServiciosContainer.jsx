import Servicios from "./Servicios";
import "./Servicios.scss";

const ServiciosContainer = () => {
  return (
    <>
      <article className="ServiciosContainer">
        <h2 className="tituloServicios">Nuestros servisios</h2>
        <div className="servicios-cont">
          <Servicios />
        </div>
      </article>
    </>
  );
};

export default ServiciosContainer;
