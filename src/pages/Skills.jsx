import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faCode } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <FontAwesomeIcon icon={faClipboardList} size="4x" />
            <h3>Skills</h3>
          </div>
          <div className="card-panel #42a5f5 blue lighten-1">
            <h4>Tecnologias</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCode} />
                JavaScript
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} />
                Node js
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} />
                React{" "}
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} />
                Redux
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} />
                PostgreSQL
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} />
                MongoDB
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} />
                Typescript
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} />
                HTML5
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} />
                CSS3
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} />
                Bootstrap
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} />
                Materialize
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} />
                Material UI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
