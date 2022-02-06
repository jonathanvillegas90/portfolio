import React from "react";
import Contact from "../components/Contact";

const About = () => {
  return (
    <div>
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", color: "white" }}>
          <i className="medium material-icons">account_box</i>
          <h3>Sobre mi</h3>
        </div>
        <div className="row">
          <div className="col s12 ">
            <div className="card-panel #42a5f5 blue lighten-1">
              <h4 className="black-text">
                Siempre me de definí como un amante de la tecnología, me encanta
                estar actualizado y en lo posible poder aprender. Tengo muchas
                ganas de progresar y seguir aumentando mis conocimientos en
                tecnología, por lo cual aprovecho y no dejo escapar cualquier
                curso o taller que pueda realizar. Me gusta trabajar en equipo,
                me adapto facilmente en las situaciones de emergencia.
              </h4>
            </div>
          </div>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
};

export default About;
