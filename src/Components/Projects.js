import React from 'react';
import "../Styles/Projects.scss";
import Card from "./Card.js";

const cardsData = [
  {
    title: "Task Management System",
    description: "Created a Task Management System that improves and controls user productivity and workflow.",
    technologies: "React, NodeJS, Express, Firebase",
    githublink: "https://github.com/SulakshanSiva/Task-Management-System"
  },
  {
    title: "Molecule Viewer",
    description: "Built a REST API that allows users to upload .sdf files to view and rotate molecules.",
    technologies: "JavaScript, JQuery, Python, C, SQLite, HTML/CSS",
    githublink: "https://github.com/SulakshanSiva/Molecule-Viewer"
  },
  {
    title: "Tic-Tac-Toe",
    description: "Built a version of TicTacToe that allows the user to play the original version or the numerical version of the game.",
    technologies: "Java, Object-Oriented-Programming Principles, JUnit Testing, Docker",
    githublink: "https://github.com/SulakshanSiva/Numerical-Tic-Tac-Toe"
  },
  {
    title: "Chat App",
    description: "Created a Chat App that allows a user to communicate with another user through real-time messages.",
    technologies: "React, Firebase, Bootstrap",
    githublink: "https://github.com/SulakshanSiva/Chat-App"
  },
  {
    title: "Pathfinding Algorithm Visualizer",
    description: "Created a Pathfinding Visualizer using the A* search algorithm.",
    technologies: "Python",
    githublink: "https://github.com/SulakshanSiva/Pathfinding-Algorithm-Visualizer"
  },
];

const Projects = () => {
  const firstRow = cardsData.slice(0, 3);
  const secondRow = cardsData.slice(3);

  return (
    <div  id="projects"className='projectbkg'>
      
      <div className="wave-svg">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,60 C 150,60 150,20 300,20 C 450,20 450,100 600,100 C 750,100 750,20 900,20 C 1050,20 1050,60 1200,60 " stroke="#0074D9" strokeWidth="5" fill="none"/>
        </svg>
      </div>

      <div className='projects'>

        <h2>My Projects</h2>

        <ul className="card-container">
          {firstRow.map((card, index) => (
            <li key={index}>
              <Card
                title={card.title}
                description={card.description}
                technologies={card.technologies}
                githublink={card.githublink}
              />
            </li>
          ))}
        </ul>

        <ul className="card-container">
          {secondRow.map((card, index) => (
            <li key={index}>
              <Card
                title={card.title}
                description={card.description}
                technologies={card.technologies}
                githublink={card.githublink}
              />
            </li>
          ))}
        </ul>

      </div>
      
    </div>
  )
}

export default Projects;
