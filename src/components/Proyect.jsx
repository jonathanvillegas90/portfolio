import React from "react";

const Proyect = ({ props }) => {
  const { id, nombre, caracteristica, tecnologias, imagen, acceso } = props;

  return (
    <div className="col s12 m7">
      <div className="card small">
        <div className="card-image">
          <img src={imagen} />
          <span className="card-title">{nombre}</span>
        </div>
        <div className="card-content">
          <p>{caracteristica}</p>
          <p>{tecnologias}</p>
        </div>
        <div className="card-action">
          <a href={acceso}>{acceso}</a>
        </div>
      </div>
    </div>
  );
};

export default Proyect;
