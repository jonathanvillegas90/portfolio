import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../img/banner linkedin.png";
const Navbar = () => {
  return (
    <>
      <div className="header-presentacion">
        <img className="responsive-img" src={Avatar} alt="banner" />
      </div>
      <nav>
        <div className="nav-wrapper blue">
          <Link className="brand-logo " to="/">
            Portfolio
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/proyects">Proyects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
