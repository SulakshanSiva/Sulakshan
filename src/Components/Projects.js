import React from 'react'
import "../Styles/Projects.scss"
import Card from "./Card.js"

const Projects = () => {
  return (
    <div className='projects' id="projects">

        <h2>Noteworthy Projects</h2>

        <ul className="card-container">
          <li><Card/></li>
          <li><Card/></li>
          <li><Card/></li>
        </ul>

        <ul className="card-container">
          <li><Card/></li>
          <li><Card/></li>
          <li><Card/></li>
        </ul>
    </div>
  )
}

export default Projects