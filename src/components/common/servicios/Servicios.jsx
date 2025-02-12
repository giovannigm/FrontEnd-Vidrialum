import asesoramientoTécnico from "../../../assets/servicios/Atencion-Acesoramiento.png";
import img2 from "../../../assets/servicios/Trabajos-Personalizados.png";
import fabricaciónInstalacion from "../../../assets/servicios/Armado-ventanas.png";
import reparacionMantenimiento from "../../../assets/servicios/reparacion-mantenimiento.png";

const Servicios = () => {
  return (
    <>
      <div className="servicio-ind">
        <img src={asesoramientoTécnico} alt="" />
        <h3>Asesoramiento técnico</h3>
        <p>
          Te ayudamos a elegir las mejores opciones en ventanas, puertas,
          mamparas y cortinas de enrollar según tu espacio y necesidades.
          Brindamos asesoramiento experto para lograr funcionalidad, estética y
          eficiencia en cada instalación.
        </p>
      </div>
      <div className="servicio-ind">
        <img src={fabricaciónInstalacion} alt="imagen de Fabricación" />
        <h3>Fabricación e instalación</h3>
        <p>
          Diseñamos e instalamos ventanas de aluminio de todo tipo, cortinas de
          enrollar, mamparas de baño. Trabajamos con materiales de alta calidad
          para garantizar resistencia, durabilidad y un acabado impecable.
        </p>
      </div>
      <div className="servicio-ind">
        <img src={img2} alt="imagen de trabajos personalizados" />
        <h3>Trabajos Personalizados</h3>
        <p>
          Fabricamos productos a medida, adaptándonos a las necesidades de cada
          cliente. Desde ventanas y mamparas personalizadas hasta puertas con
          diseños exclusivos, brindamos soluciones elegantes y funcionales para
          el hogar o comercio.
        </p>
      </div>
      <div className="servicio-ind">
        <img
          src={reparacionMantenimiento}
          alt="imagen de mantenimiento de ventana"
        />
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
