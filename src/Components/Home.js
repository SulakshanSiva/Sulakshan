import React from 'react'
import "../Styles/Home.scss"

const Home = () => {
  return (
    <div className='home' id="home">

      <div className='intro'>

        <h3>Hello 👋, I'm</h3>
        <h1>Sulakshan</h1>
        <h3 className='jobTitle'>Software Engineer</h3>
        <p>I'm a Full-Stack engineer, currently in the <br></br>Computer Science (Co-op) program at the University of Guelph.</p>

        <a href="https://drive.google.com/file/d/1OIXSgYwDi0j6pq9io2NP1lefIXEW8ev_/view?usp=sharing" target="_blank">
          <button>Resume</button>
        </a>

      </div>

      <div className='triangle'>

      </div>

    </div>  
  )
}

export default Home;
