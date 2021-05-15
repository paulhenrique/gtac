import React from 'react'
import SectionTitle from '../SectionTitle'
import './style.scss';

const logos = [
  {
    title: 'USP', image: 'img/photos/usp.png', href: 'https://www5.usp.br'
  },
  {
    title: 'UFSCar', image: 'img/photos/ufscar.png', href: 'https://www2.ufscar.br'
  },
  { title: 'Unicamp', image: 'img/photos/unicamp.png', href: 'https://www.unicamp.br/unicamp/' },
  { title: 'Unifesp', image: 'img/photos/unifesp.png', href: 'https://www.unifesp.br' },
];

function Partners() {
  return (
    <div className="Partners">
      <SectionTitle text="Partners" />
      <div className="containerPartners">
        {
          logos.map((e, index) => (
            <a href={e.href} target="_blank" rel="noreferrer">
              <img src={e.image} alt={`Imagem ${index}`} key={index} />
            </a>
          ))
        }

      </div>
    </div>
  )
}

export default Partners
