import React from 'react'
import "../Styles/Contact.scss"

const Contact = () => {
  return (
    <div id="contact" className='contact'>

        <h1>Contact Me</h1>
        
        <p>Got a question or proposal, or just want to say hello? Email me!</p>
        
        <a className="emailBtn" href="mailto:sulakshansivak@gmail.com" target="_blank">
          <button>Send Email</button>
        </a>  

        <a className="footer" href="https://github.com/SulakshanSiva/Personal-Website" target='_blank'>
          <p>Designed & Built by Sulakshan Sivakumaran</p>
        </a>
        
    </div>
  )
}

export default Contact