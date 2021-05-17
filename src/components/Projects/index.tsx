import React from 'react'
import Project, { ProjectPropp } from '../CardProject'
import SectionTitle from '../SectionTitle'
import './style.scss';
import { useGeneral } from '../../contexts/general';

function Projects() {
  const { projects } = useGeneral();

  if (!projects) return null;
  return (
    <div className="ProjectsSection" id="projects">
      <SectionTitle text="Projects" />
      <div className="containerProjects">
        {
          projects.map((project: ProjectPropp) => (
            <Project project={project} key={project.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects
