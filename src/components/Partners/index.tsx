import React from 'react'
import SectionTitle from '../SectionTitle'
import './style.scss';

const logos = [
  {
    title: 'USP', image: 'img/photos/usp.png', href: 'https://fapesp.br'
  },
  {
    title: 'UFSCar', image: 'img/photos/ufscar.png', href: 'https://itp.ifsp.edu.br'
  },
  { title: 'Unicamp', image: 'img/photos/unicamp.png', href: 'https://itp.ifsp.edu.br/index.php/ensino-tecnico-presencial/manutencao-e-suporte-em-informatica' },
  { title: 'Unifesp', image: 'img/photos/unifesp.png', href: 'https://itp.ifsp.edu.br/index.php/ensino-tecnico-presencial/manutencao-e-suporte-em-informatica' },
];

function Partners() {
  return (
    <div className="Partners">
      <SectionTitle text="Partners" />
      <div className="containerPartners">
        {
          logos.map((e, index) => (
            <a href="">
              <img src={e.image} alt={`Imagem ${index}`} key={index} />
            </a>
          ))
        }

      </div>
    </div>
  )
}

export default Partners
