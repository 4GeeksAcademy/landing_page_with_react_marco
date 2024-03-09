import React from "react";

const Footer = ({ year }) => {
  return (
    <footer className="mt-5 bg-dark text-white">
      <div className="d-flex justify-content-center align-items-center">
        <p>Copryright &copy; Your Website {year}</p>
      </div>
    </footer>
  );
};

export default Footer;