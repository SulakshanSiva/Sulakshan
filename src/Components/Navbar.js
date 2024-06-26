import React, { useState } from 'react';
import "../Styles/Navbar.scss";

const Navbar = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  const toggleHamburger = () => {
    setIsHamburgerClicked(!isHamburgerClicked);
  };

  const closeHamburger = () => {
    setIsHamburgerClicked(false); 
  };

  return (
    <div className="navbar">
      <div className="navLogo">
        <a href="#home">
          <h1>Sulakshan.</h1>
        </a>
      </div>

      <div className={`${isHamburgerClicked ?  'showOnMobile' : 'navLinks'}`}>
        <ul>
          <li><a href="#projects" onClick={closeHamburger}>Projects</a></li>
          <li><a href="#contact" onClick={closeHamburger}>Contact</a></li>
        </ul> 
      </div>

      <div className="navBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`feather feather-menu ${isHamburgerClicked ? 'open' : ''}`}
          onClick={toggleHamburger}
        >
          {!isHamburgerClicked ? (
            <>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          )}
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
  