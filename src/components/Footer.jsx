import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer blue">
        <div className="footer-copyright center">
          <div className="container">
            Jonathan Villegas - &copy; {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
