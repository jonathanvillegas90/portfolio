import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileAlt,
  faIdCard,
  faFileLines,
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
            color: "white",
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
              rel="noreferrer"
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
              rel="noreferrer"
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
              rel="noreferrer"
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
              rel="noreferrer"
              style={{ color: "black", fontSize: "30px" }}
            >
              <FontAwesomeIcon icon={faGithubSquare} size="1x" />
              <span>Repositorio de Git:</span>
              Jonathanvillegas90
            </a>
          </div>
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href="https://www.canva.com/design/DAEKkoLiXQg/ad7hFsnc4nq2hr4pvoXrfw/view?utm_content=DAEKkoLiXQg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              target="_blank"
              rel="noreferrer"
              style={{ color: "black", fontSize: "30px" }}
            >
              <FontAwesomeIcon icon={faFileLines} size="1x" />
              <span>Curriculum Vitae</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
