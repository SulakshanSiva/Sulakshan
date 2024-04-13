  import "../Styles/Navbar.scss"
  import React from 'react'

  const Navbar = () => {
    return (
      <div className="navbar">

        <div className="navLogo">
          <h1>Sulakshan.</h1>
        </div>

        <div className="navLinks">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Projects</a></li>
          </ul> 
        </div>

        <div className="navBtn">
          <a href="#">Contact</a>
        </div>    

      </div>
    )
  }

  export default Navbar