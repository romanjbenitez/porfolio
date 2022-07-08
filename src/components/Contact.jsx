import React from "react";
import "../styles/contact.scss"
function Contact() {
  return (
    <div className="container">
      <div className="blur">
        <div className="contact bounce-in-top" >
          <h2 className="contact-tille">Contacto</h2>
          <p
            className="contact-text"
          >
            Actualmente me encuentro en búsqueda activa de oportunidades
            laborales por lo te facilito el contacto directo conmigo a través de
            mi casilla de correo. Quedo a la espera de cualquier consulta u
            oportunidad laboral, o simplemente te agradecería si pudieras
            compartir este sitio para llegar a más personas. 
            <br></br>Atte: Roman Benitez
          </p>
          <button className="button"> <a href="mailto:roman200217@gmail.com">Contactar!!!</a></button>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;
