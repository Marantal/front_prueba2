import React from "react";
import Logo from "../../../src/assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <p>
           FOOD FOR EVERYBODY
        </p>
        <p>
        Copyright © 2024 Food For EveryBody
        </p>
        <p>
        Todos los derechos reservados
        </p>
        <div className="footer-icons">
          <BsTwitter />
          <FaFacebookF />
          <BsYoutube />
          <SiLinkedin />    
          
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Nosotros</span>
          <span>Empresas aliadas</span>
          <span>Voluntarios</span>
          <span>Terminos del servicio</span>
          <span>Legal</span>
          <span>Centro de Soporte</span>
        </div>
        <div className="footer-section-columns">
          <span>+591-7583-6165</span>
          <span>xcruzt@food4everybody.com</span>
          <span>maldabat@food4everybody.com</span>
          <span>jtittoq@food4everybody.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
