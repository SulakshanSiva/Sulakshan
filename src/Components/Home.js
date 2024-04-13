import React from 'react'
import "../Styles/Home.scss"
import resume from "../Assets/Sulakshan_Sivakumaran_Resume.pdf"

const Home = () => {
  return (
    <div className='home'>

      <div className='intro'>

        <h3>Hello 👋, I'm</h3>
        <h1>Sulakshan</h1>
        <h3 className='jobTitle'>Software Engineer</h3>
        <p>I'm a back-end engineer, currently in the <br></br>Computer Science (Co-op) program at the University of Guelph.</p>

        <button>
          <a href={resume} download="Sulakshan_Sivakumaran_Resume">Resume</a>
        </button>
      </div>

    </div>
  )
}

export default Home;
