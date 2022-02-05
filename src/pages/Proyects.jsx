import React from "react";
import Proyect from "../components/Proyect";

const proyectos = [
  {
    id: 1,
    nombre: "portfolio",
    caracteristica: "realizado puramente con react",
    tecnologias: "React",
    imagen:
      "https://4.bp.blogspot.com/-jDcqEFr898k/XBAeeuO_B3I/AAAAAAAAAEM/ugCkZsDFoN8_HGj34Mcs6O61GvNDzcKaACLcBGAs/s1600/phpCode.png",
    acceso: "#",
  },
  {
    id: 2,
    nombre: "calculadora",
    caracteristica: "realizado puramente con react",
    tecnologias: "React,firebase",
    imagen:
      "https://4.bp.blogspot.com/-jDcqEFr898k/XBAeeuO_B3I/AAAAAAAAAEM/ugCkZsDFoN8_HGj34Mcs6O61GvNDzcKaACLcBGAs/s1600/phpCode.png",
    acceso: "#",
  },
];

const Proyects = () => {
  return (
    <div className="container">
      <div style={{ display: "flex", alignItems: "center" }}>
        <i className="medium material-icons">work</i>
        <h3>Proyectos</h3>
      </div>
      <div className="collection">
        {proyectos.map((p) => {
          return <Proyect props={p} key={p.id} />;
        })}
      </div>
    </div>
  );
};

export default Proyects;
