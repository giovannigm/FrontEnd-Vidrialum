import React from "react";
import "./nosotros.scss";
import imgMision from "../../../assets/nosotros/mision.png";
import imgVision from "../../../assets/nosotros/vision.png";

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <h2 className="titulo">Nuestra Historia</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
        Lorem ipsum dolor
      </p>
      <div className="sections-container">
        <div className="section">
          <h3>Misión</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Velit ratione, sed quisquam rerum maxime quibusdam nam, ut aliquam
            rem neque molestiae.
          </p>
          <img src={imgMision} />
        </div>
        <div className="section">
          <h3>Visión</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Velit ratione, sed quisquam rerum maxime quibusdam nam, ut aliquam
            rem neque molestiae.
          </p>
          <img src={imgVision} />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
