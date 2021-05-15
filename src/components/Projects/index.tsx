import React from 'react'
import Project from '../CardProject'
import SectionTitle from '../SectionTitle'
import './style.scss';

function Projects() {
  const project = {
    title: 'ElectrosFI',
    description: 'Eletromagnetic Simulator of The Federal Institute of São Paulo',
    href: 'project/aaaa'
  }
  return (
    <div className="ProjectsSection">
      <SectionTitle text="Projects" />
      <div className="containerProjects">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(e => (
            <Project project={project} key={e} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects
