import React from "react";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="container">
          <div className="row">
            <Contact></Contact>
            <div className="col">
              <div className="card-panel #42a5f5 blue lighten-1">
                <h4 className="black-text">
                  ¡Hola! Mi nombre es Jonathan Villegas, tengo 31 años y soy
                  desarrollador web full stack con conocimientos en
                  JavaScript,Node, HTML5, CSS3, React, Redux, Java, Python y
                  SQL. Gracias a mi formación y conocimientos, me encuentro en
                  búsqueda de nuevos desafíos para seguir creciendo
                  profesionalmente.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
