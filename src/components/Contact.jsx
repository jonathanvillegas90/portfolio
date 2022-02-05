import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="col s12 m8">
        <div className="card-panel #42a5f5 blue lighten-1">
          <div style={{ display: "flex", alignItems: "center" }}>
            <i class="fa-solid fa-envelope"></i>
            <span>E-mail: </span>
            <a href="chony1208@gmail.com" target="_blank">
              chony1208@gmail.com
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="square-phone"
              class="svg-inline--fa fa-square-phone"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM351.6 321.5l-11.62 50.39c-1.633 7.125-7.9 12.11-15.24 12.11c-126.1 0-228.7-102.6-228.7-228.8c0-7.328 4.984-13.59 12.11-15.22l50.38-11.63c7.344-1.703 14.88 2.109 17.93 9.062l23.27 54.28c2.719 6.391 .8828 13.83-4.492 18.22L168.3 232c16.99 34.61 45.14 62.75 79.77 79.75l22.02-26.91c4.344-5.391 11.85-7.25 18.24-4.484l54.24 23.25C349.5 306.6 353.3 314.2 351.6 321.5z"
              ></path>
            </svg>
            <span>Teléfono:</span>
            <a href="https://wa.me/5492664793819">2664793819</a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin"
              className="svg-inline--fa fa-linkedin"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              ></path>
            </svg>
            <span>LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/jonathanvillega-dev/"
              target="_blank"
            >
              Jonathan Villegas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
