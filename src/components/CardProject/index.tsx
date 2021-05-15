import React from 'react'
import Pen from '../../assets/img/pen.png';
import './style.scss';

interface ProjectPropp {
  title: string;
  description: string;
  href: string;
}

interface ProjectProps {
  project: ProjectPropp;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <a href={project.href} className="projectCard">
      <div >
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      <img src={Pen} alt="Pen" />
    </a>
  )
}

export default Project
