import React from "react";
import AboutBackground from "../../../src/assets/about-background.png";
import AboutBackgroundImage from "../../../src/assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre Nosotros</p>
        <h1 className="primary-heading">
          Food For EveryBody
        </h1>
        <p className="primary-text">
        Bienvenido a Food for EveryBody, el punto de encuentro donde convergen la generosidad, 
        la solidaridad y la esperanza. En nuestro compromiso constante por construir un mundo más 
        equitativo, hemos creado esta plataforma para conectar a donantes compasivos, voluntarios 
        entregados y aquellos que buscan apoyo alimentario. 
        </p>
        <p className="primary-text">
        En el corazón de Food for EveryBody 
        yace la convicción de que cada alimento compartido es una semilla de cambio. Nos esforzamos 
        por simplificar el proceso de donación y recolección, tejiendo así una red de apoyo que abraza 
        a comunidades enteras. Únete a nosotros en este viaje, donde cada pequeño acto de generosidad 
        es una poderosa contribución hacia un mañana más lleno de esperanza y abundancia.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Mas</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Ver video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
