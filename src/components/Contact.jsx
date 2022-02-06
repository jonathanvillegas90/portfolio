import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileAlt,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div>
      <div className="col" style={{ display: "grid", justifyItems: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faIdCard} size="4x" />
          <h3>Contacto</h3>
        </div>
        <div className="card-panel #42a5f5 blue lighten-1">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <a
              href="chony1208@gmail.com"
              target="_blank"
              style={{ color: "black", fontSize: "30px" }}
            >
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
              <span>E-mail: </span>
              chony1208@gmail.com
            </a>
          </div>
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href="https://wa.me/5492664793819"
              target="_blank"
              style={{ color: "black", fontSize: "30px" }}
            >
              <FontAwesomeIcon icon={faMobileAlt} size="1x" />
              <span>Teléfono:</span>
              2664793819
            </a>
          </div>
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href="https://www.linkedin.com/in/jonathanvillega-dev/"
              target="_blank"
              style={{ color: "black", fontSize: "30px" }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
              <span>LinkedIn:</span>
              Jonathan Villegas
            </a>
          </div>
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href="https://github.com/jonathanvillegas90"
              target="_blank"
              style={{ color: "black", fontSize: "30px" }}
            >
              <FontAwesomeIcon icon={faGithubSquare} size="1x" />
              <span>Repositorio de Git:</span>
              Jonathanvillegas90
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
