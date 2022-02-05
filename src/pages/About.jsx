import React from "react";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";

const About = () => {
  return (
    <div>
      <div className="container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <i className="medium material-icons">account_box</i>
          <h3>Sobre mi</h3>
        </div>
        <div className="row">
          <div className="col s12 m8">
            <div className="card-panel #42a5f5 blue lighten-1">
              <span className="black-text">
                Siempre me de definí como un amante de la tecnología, me encanta
                estar actualizado y en lo posible poder aprender. Tengo muchas
                ganas de progresar y seguir aumentando mis conocimientos en
                tecnología, por lo cual aprovecho y no dejo escapar cualquier
                curso o taller que pueda realizar. Tengo facilidad para el
                trabajo en equipo, ayudo en lo que se pueda y reconozco el
                esfuerzo que realizan mis compañeros.
              </span>
            </div>
          </div>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
};

export default About;
