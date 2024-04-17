import React from 'react'
import "../Styles/Projects.scss"
import Card from "./Card.js"


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
    <div className='projects' id="projects">

        <h2>My Projects</h2>

        <ul className="card-container">
          {firstRow.map((card, index) => (
            <li>
              <Card
                key={index}
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
            <li>
              <Card
                key={index}
                title={card.title}
                description={card.description}
                technologies={card.technologies}
                githublink={card.githublink}
              />
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Projects