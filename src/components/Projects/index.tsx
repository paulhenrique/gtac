import React from 'react'
import Project from '../CardProject'
import SectionTitle from '../SectionTitle'
import './style.scss';

function Projects() {
  const projects = [
    {
      title: 'ElectrosFI',
      description: 'Eletromagnetic Simulator of The Federal Institute of São Paulo',
      href: 'https://itp.ifsp.edu.br'
    },
    {
      title: 'Agriloggi',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa laborum asperiores ad quam? Consectetur architecto inventore',
      href: 'https://itp.ifsp.edu.br'
    },
    {
      title: 'Panda',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa laborum asperiores ad quam? Consectetur architecto inventore',
      href: 'https://itp.ifsp.edu.br'
    },
    {
      title: 'GPS',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa laborum asperiores ad quam? Consectetur architecto inventore',
      href: 'https://itp.ifsp.edu.br'
    },
    {
      title: 'Hello Yotta',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa laborum asperiores ad quam? Consectetur architecto inventore',
      href: 'https://itp.ifsp.edu.br'
    },
    {
      title: 'GLMT Scattering',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa laborum asperiores ad quam? Consectetur architecto inventore',
      href: 'https://itp.ifsp.edu.br'
    },
    {
      title: 'Fábrica de Software',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa laborum asperiores ad quam? Consectetur architecto inventore',
      href: 'https://itp.ifsp.edu.br'
    },
    {
      title: 'SGE',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa laborum asperiores ad quam? Consectetur architecto inventore',
      href: 'https://itp.ifsp.edu.br'
    },
    {
      title: 'Show da Física',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa laborum asperiores ad quam? Consectetur architecto inventore',
      href: 'https://itp.ifsp.edu.br'
    },
    {
      title: 'ExpWeb',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa laborum asperiores ad quam? Consectetur architecto inventore',
      href: 'https://itp.ifsp.edu.br'
    },
    {
      title: 'SVSA',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa laborum asperiores ad quam? Consectetur architecto inventore',
      href: 'https://itp.ifsp.edu.br'
    }
  ]
  return (
    <div className="ProjectsSection" id="projects">
      <SectionTitle text="Projects" />
      <div className="containerProjects">
        {
          projects.map(project => (
            <Project project={project} key={project.title} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects
