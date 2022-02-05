import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div>
      <div
        className="col s12"
        style={{ display: "grid", justifyItems: "center" }}
      >
        <div className="card-panel #42a5f5 blue lighten-1">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>E-mail: </span>
            <a
              href="chony1208@gmail.com"
              target="_blank"
              style={{ color: "white" }}
            >
              chony1208@gmail.com
            </a>
          </div>
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faMobileAlt} />
            <span>Teléfono:</span>
            <a href="https://wa.me/5492664793819" style={{ color: "white" }}>
              2664793819
            </a>
          </div>
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/jonathanvillega-dev/"
              target="_blank"
              style={{ color: "white" }}
            >
              Jonathan Villegas
            </a>
          </div>
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faGithubSquare} />
            <span>Repositorio de Git:</span>
            <a
              href="https://github.com/jonathanvillegas90"
              target="_blank"
              style={{ color: "white" }}
            >
              Jonathanvillegas90
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
