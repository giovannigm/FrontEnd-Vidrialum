import img1 from "../../../assets/Prueba/b.svg";
import img2 from "../../../assets/Prueba/a.svg";
// import img3 from "../../../assets/Prueba/a.svg";
import img4 from "../../../assets/reparacion-mantenimiento.png";

const Servicios = () => {
  return (
    <>
      <div className="servicio-ind">
        <img src={img2} alt="" />
        <h3>Asesoramiento técnico</h3>
        <p>
          Te ayudamos a elegir las mejores opciones en ventanas, puertas,
          mamparas y cortinas de enrollar según tu espacio y necesidades.
          Brindamos asesoramiento experto para lograr funcionalidad, estética y
          eficiencia en cada instalación.
        </p>
      </div>
      <div className="servicio-ind">
        <img src={img1} alt="imagen de Fabricación" />
        <h3>Fabricación e instalación</h3>
        <p>
          Diseñamos e instalamos ventanas de aluminio de todo tipo, cortinas de
          enrollar, mamparas de baño. Trabajamos con materiales de alta calidad
          para garantizar resistencia, durabilidad y un acabado impecable.
        </p>
      </div>
      <div className="servicio-ind">
        <img src={img2} alt="imagen de trabajos personalizados" />
        <h3>Trabajos personalizados y decoración</h3>
        <p>
          Fabricamos productos a medida, adaptándonos a las necesidades de cada
          cliente. Desde ventanas y mamparas personalizadas hasta puertas con
          diseños exclusivos, brindamos soluciones elegantes y funcionales para
          el hogar o comercio.
        </p>
      </div>
      <div className="servicio-ind">
        <img src={img4} alt="imagen de mantenimiento de ventana" />
        <h3>Reparaciones y mantenimiento</h3>
        <p>
          Ofrecemos mantenimiento y reparación de ventanas de aluminio, cortinas
          de enrollar, mamparas de baño. <br />
          Ajustamos, reparamos mecanismos dañados, reemplazamos vidrios y
          garantizamos el buen funcionamiento de cada instalación.
        </p>
      </div>
    </>
  );
};

export default Servicios;
