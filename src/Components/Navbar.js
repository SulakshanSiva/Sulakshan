  import "../Styles/Navbar.scss"
  import React from 'react'

  const Navbar = () => {
    return (
      <div className="navbar">

        <div className="navLogo">
          <a href="#home">
            <h1>Sulakshan.</h1>
          </a>
        </div>

        <div className="navLinks">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#career">Career</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul> 
        </div>

        <div className="navBtn">
          <a href="#contact">Contact</a>
        </div>    

      </div>
    )
  }

  export default Navbar