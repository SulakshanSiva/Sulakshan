import React from 'react'
import "../Styles/About.scss"
import linkedinLogo from "../Assets/Images/icons8-linkedin.svg"
import githubLogo from "../Assets/Images/icons8-github.svg"

const About = () => {
  return (
    <div className='about' id='about'>

        <div className='picture'></div>

        <div className='socialLinks'>
          <a  href="https://www.linkedin.com/in/sulakshansiva/" target="_blank">
            <img src={linkedinLogo} alt="Linkedin Logo"/>
          </a>

          <a href="https://github.com/SulakshanSiva/" target="_blank">
            <img src={githubLogo} alt="Github Logo"/>
          </a>
        </div>

        <div className='aboutInfo'>
          <h2>About Me</h2>
          <h3>My name is Sulakshan Sivakumaran.</h3>
          <p className='endOfPara'>I am a Software Engineer currently completing a Bachelor of Computing at the University of Guelph.</p>
          <p>I have previously interned at NCR as a Software Engineer and at First National Financial LP as a Software Test Engineer,</p>
          <p className='endOfPara'>I have a diverse set of skills with vast amounts of coding experience in JavaScript, TypeScript, Java, C, and SQL.</p>
          <p>In my free time, I seek out ways to improve my knowledge in the realm of technology</p>
          <p>with my current interests lying in Machine Learning and Cloud Computing.</p>
        </div>

        <div className='skills'>
        </div>

    </div>
  )
}

export default About