import React from "react";
import Profile1 from "../../../src/assets/1.jpg";
import Profile2 from "../../../src/assets/2.jpg";
import Profile3 from "../../../src/assets/3.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Empresas Aliadas</p>
        <h1 className="primary-heading-black">Conoce a quienes nos ayudan</h1>
        <p className="primary-text">
        En Food for EveryBody, extendemos nuestro más sincero agradecimiento a nuestras empresas aliadas. Gracias por ser catalizadores esenciales en nuestra misión compartida de luchar contra la inseguridad alimentaria. Su apoyo constante y generoso nos permite hacer una diferencia significativa en las vidas de aquellos que más lo necesitan. Juntos, estamos construyendo un futuro más justo y alimentando la esperanza en nuestras comunidades. ¡Gracias por ser parte fundamental de este viaje solidario!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={Profile1} alt="" />
        <p>
        Distribuidora de Pollos Hilda, comprometidos con la calidad desde el primer pío. Nos enorgullece ofrecer pollos frescos y cuidadosamente seleccionados, llevando lo mejor a su mesa. Con décadas de experiencia en la cría y distribución avícola, en Hilda garantizamos cada bocado con estándares excepcionales. Nuestra misión es llevar la excelencia a cada hogar, ofreciendo productos jugosos y nutritivos que deleitan los paladares más exigentes. Descubre la diferencia con Distribuidora de Pollos Hilda: sabor que trasciende.
        </p>
        <h2>Distribuidora Pollos "Hilda"</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={Profile2} alt="" />
        <p>
        Distribuidora de Alimentos Buena Granja, cultivando sabor y nutrición para su bienestar. En Buena Granja, nos dedicamos a proporcionar alimentos de la más alta calidad, cuidadosamente cosechados y seleccionados para brindar una experiencia culinaria excepcional. Nuestra pasión por la frescura y la sostenibilidad se refleja en cada producto que llevamos a su mesa. Desde productos de la tierra hasta delicias gourmet, en Buena Granja creemos que cada comida debe ser un placer para los sentidos y un impulso para su salud. Descubra la diferencia con Distribuidora de Alimentos Buena Granja: donde la calidad se convierte en tradición.
        </p>
        <h2>Distribuidora de alimentos "Buena Granja"</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={Profile3} alt="" />
        <p>
        Distribuidora de Alimentos Secos Nuts, donde la frescura se une a la conveniencia. En Nuts, nos especializamos en llevar hasta usted una variedad de alimentos secos de la más alta calidad. Desde frutos secos y granos hasta mezclas exquisitas, cada producto es seleccionado con esmero para ofrecerle sabor, textura y nutrición incomparables. Nos enorgullece brindar opciones saludables y deliciosas que se adaptan a su estilo de vida activo. En Distribuidora de Alimentos Secos Nuts, elevamos la experiencia de los alimentos secos a nuevas alturas, donde cada bocado es una aventura de sabores y beneficios para la salud.
        </p>
        <h2>Distribuidora de alimentos secos "Nuts"</h2>
      </div>
    </div>
  );
};

export default Testimonial;
