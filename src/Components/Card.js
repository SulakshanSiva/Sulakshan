import React from 'react'
import "../Styles/Card.scss"
import githubLogo from "../Assets/Images/icons8-github-30.svg"

const Card = ({ title, description, technologies, githublink }) => {
  return (
    <div className='card'>

      <a href={githublink} target="_blank" className="logo-container">
        <img className="logo" src={githubLogo} alt="Github Logo"/>
      </a>

      <div className='content'>
        <h2>{title}</h2>
        <p className='description'>{description}</p>
        <p className='technologies'>{technologies}</p>
      </div>

    </div>
  )
}

export default Card;