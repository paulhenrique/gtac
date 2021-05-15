import React from 'react'
import SectionTitle from '../SectionTitle';
import LogoFapesp from '../../assets/img/fapesp.png';
import LogoIFSP from '../../assets/img/logo_if_2.png';
import LogoInformatica from '../../assets/img/informatica.png';
import LogoCnpq from '../../assets/img/cnpq.png';

import './style.scss';

const logos = [
  { title: 'Fapesp', image: LogoFapesp, href: 'https://fapesp.br' },
  { title: 'IFSP', image: LogoIFSP, href: 'https://itp.ifsp.edu.br' },
  { title: 'Informática IFSP', image: LogoInformatica, href: 'https://itp.ifsp.edu.br/index.php/ensino-tecnico-presencial/manutencao-e-suporte-em-informatica' },
  { title: 'CNPQ', image: LogoCnpq, href: 'https://www.gov.br/cnpq/pt-br' },
];


function Sponsors() {
  return (
    <div className="Sponsors">
      <SectionTitle text="Sponsors and Research Financiers " />
      <div className="containerSponsors">
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

export default Sponsors
