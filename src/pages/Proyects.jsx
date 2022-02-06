import React from "react";
import Proyect from "../components/Proyect";

const proyectos = [
  {
    id: 1,
    nombre: "Weather app",
    caracteristica: "App de clima realizado con React, utilizando promesas",
    tecnologias: "React",
    imagen:
      "https://res.cloudinary.com/dmkvgegeu/image/upload/v1644176272/weatherApp_r8xyug.png",
    acceso: "https://weather-jav-app.netlify.app",
  },
  {
    id: 2,
    nombre: "Calculadora nominal",
    caracteristica:
      "App realizada para calcular los costos en el pago de horas, calculando la cantidad de horas junto con el monto de ora trabajada.",
    tecnologias: "React,firebase, Materialize",
    imagen:
      "https://res.cloudinary.com/dmkvgegeu/image/upload/v1644176269/calculadoraNominal_h6vksb.png",
    acceso: "https://calculadoranominal.netlify.app",
  },
  {
    id: 3,
    nombre: "Movies app",
    caracteristica:
      "App creada para buscar, agregar a favoritos o ver los detalles de una pelicula buscada en la barra de busqueda.",
    tecnologias: "React, Bootstrap",
    imagen:
      "https://res.cloudinary.com/dmkvgegeu/image/upload/v1644176269/peliculasApp_phc94p.png",
    acceso: "https://movies-jav-app.netlify.app",
  },
  {
    id: 4,
    nombre: "Agenda teléfonica",
    caracteristica:
      "Pagina web creada para agendar contactos, los cuales al ser agregados se guardan en local storage para que los contactos persistan",
    tecnologias: "React, Materialize",
    imagen:
      "https://res.cloudinary.com/dmkvgegeu/image/upload/v1644176269/agendaLocal_tefgpg.png",
    acceso: "https://calculadoranominal.netlify.app",
  },
  {
    id: 5,
    nombre: "Galery app",
    caracteristica:
      "Pagina web creada para agendar contactos, los cuales al ser agregados se guardan en local storage para que los contactos persistan",
    tecnologias: "React, Bootstrap",
    imagen:
      "https://res.cloudinary.com/dmkvgegeu/image/upload/v1644176271/galleryApp_nvtolx.png",
    acceso: "https://galery-app.netlify.app",
  },
  {
    id: 6,
    nombre: "ToDo list",
    caracteristica:
      "Pagina web creada para agendar contactos, los cuales al ser agregados se guardan en local storage para que los contactos persistan",
    tecnologias: "React",
    imagen:
      "https://res.cloudinary.com/dmkvgegeu/image/upload/v1644176272/todosApp_wwy6sb.png",
    acceso: "https://todo-list-jav.netlify.app",
  },
];

const Proyects = () => {
  return (
    <div className="container">
      <div style={{ display: "flex", alignItems: "center", color: "white" }}>
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
