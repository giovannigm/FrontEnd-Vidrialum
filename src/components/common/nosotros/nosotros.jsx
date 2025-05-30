import React from "react";
import "./nosotros.scss";
import imgMision from "../../../assets/nosotros/mision.png";
import imgVision from "../../../assets/nosotros/vision.png";

const Nosotros = () => {
  return (
    <div className="nosotros-container" id="Nosotros-Container">
      <h2 className="titulo">Nosotros</h2>
      <p>
        Vidrialum nació hace más de 20 años con una visión clara: ofrecer
        soluciones integrales en aluminio, vidrio y afines, combinando
        funcionalidad, diseño y calidad. A lo largo de estas dos décadas, hemos
        crecido gracias a la confianza de nuestros clientes, el esfuerzo
        constante y un compromiso firme con la atención personalizada. Hoy somos
        una empresa consolidada, brindando un servicio confiable y adaptado a
        proyectos residenciales, comerciales e industriales
      </p>
      <div className="sections-container">
        <div className="section">
          <h3>Misión</h3>
          <p>
            Brindar soluciones integrales en aluminio, vidrio y productos
            afines, ofreciendo calidad, diseño y funcionalidad en cada proyecto.
            Nos comprometemos con la satisfacción del cliente a través de un
            servicio personalizado, eficiente y confiable.
          </p>
          <img src={imgMision} />
        </div>
        <div className="section">
          <h3>Visión</h3>
          <p>
            Ser una empresa referente en la región por nuestra trayectoria,
            innovación y compromiso, destacándonos por transformar espacios con
            soluciones prácticas, duraderas y estéticamente atractivas.
          </p>
          <img src={imgVision} />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
