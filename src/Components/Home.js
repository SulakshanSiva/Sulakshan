import React from 'react'
import "../Styles/Home.scss"
import resume from "../Assets/Sulakshan_Sivakumaran_Resume.pdf"

const Home = () => {
  return (
    <div className='home' id="home">

      <div className='intro'>

        <h3>Hello 👋, I'm</h3>
        <h1>Sulakshan</h1>
        <h3 className='jobTitle'>Software Engineer</h3>
        <p>I'm a Full-Stack engineer, currently in the <br></br>Computer Science (Co-op) program at the University of Guelph.</p>

        <a href={resume} download="Sulakshan_Sivakumaran_Resume">
          <button>Resume</button>
        </a>

      </div>

      <div className='triangle'>

      </div>

    </div>
  )
}

export default Home;
