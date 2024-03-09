import React from "react";

const Navbar = ( {title}) => {
    
    const navLinks = ["Home", "About", "Services", "Contact"];

    const renderNavLinks = () => {
        return navLinks.map((navItem, index) => {
            const isGrey = index >= navLinks.length - 3; 
            const linkColorClass = isGrey ? "text-grey" : "text-white"; 
      
            return (
              <li className="nav-item" key={index}>
                <a className={`nav-link ${linkColorClass}`} href={`#${navItem.toLowerCase()}`}>
                  {navItem}
                </a>
              </li>
            );
          });
        };
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#"><strong>{title}</strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              {renderNavLinks()}
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;