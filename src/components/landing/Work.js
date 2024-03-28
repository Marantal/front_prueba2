import React from "react";
import PickMeals from "../../../src/assets/pick-meals-image.png";
import ChooseMeals from "../../../src/assets/choose-image.png";
import DeliveryMeals from "../../../src/assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Donante",
      text: "Dona alimentos de cualquier categoria en buen estado con fecha de vencimiento",
    },
    {
      image: ChooseMeals,
      title: "Beneficiario",
      text: "Selecciona las donaciones que puedan servirle a su organizacion",
    },
    {
      image: DeliveryMeals,
      title: "Voluntario",
      text: "El voluntario se encuentra con el donante, y lleva la donación hasta el establecimiento de la orgnizacion beneficiada",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Trabajo</p>
        <h1 className="primary-heading">¿Como trabajamos?</h1>
        <p className="primary-text">
        En Food for EveryBody, transformamos la generosidad en acción significativa. Nuestra plataforma sirve como un puente vital entre 
        donantes altruistas y organizaciones benéficas dedicadas, facilitando un proceso fluido de donación y distribución de alimentos. 
        Los donantes encuentran en nosotros una vía para impactar directamente en sus comunidades, mientras que los voluntarios hallan 
        oportunidades significativas para poner en práctica su deseo de ayudar. Las organizaciones beneficiadas, a su vez, reciben un 
        flujo constante de recursos esenciales, permitiéndoles ampliar su impacto y llegar a aquellos que más lo necesitan. En Food for 
        EveryBody, cada contribución, ya sea en forma de alimentos, tiempo o recursos, se traduce en un acto tangible de solidaridad que 
        deja una huella duradera en las vidas de aquellos que servimos. Únete a nosotros y sé parte de esta cadena de apoyo que nutre a 
        comunidades enteras y crea un cambio duradero.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
