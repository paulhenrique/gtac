import React from 'react'
import Pen from '../../assets/img/pen.png';
import './style.scss';

export interface ProjectPropp {
  id: string;
  title: string;
  description: string;
  link: string;
}

interface ProjectProps {
  project: ProjectPropp;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <a data-tip="hello world" href={project.link} target="_blank" rel="noreferrer" className="projectCard">
      <div >
        <h1>{project.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
      </div>
      <img src={Pen} alt="Pen" />
    </a>
  )
}

export default Project
