import React from 'react'
import CardMember from '../CardMember';
import SectionTitle from '../SectionTitle'
import './style.scss';

const members = [
  {
    name: 'Carlos Santos',
    description: 'Doutor em Egenharia Elétrica pela Universidade Estadual de Campinas',
    picture: 'img/photos/carlos.png',
    link: 'http://lattes.cnpq.br/2704773293662530'
  },
  {
    name: 'Danilo C. Bueno',
    description: 'Mestre em Ciência da Computação pela Universidade Federal de Sã',
    picture: 'img/photos/danilo.png',
    link: 'http://lattes.cnpq.br/0922970312299191'
  },
  {
    name: 'Paulo Henrique',
    description: 'Graduando em Licenciatura em Física pelo IFSP Campus itapetininga',
    picture: 'img/photos/paulo.png',
    link: 'http://lattes.cnpq.br/1994196517067630'
  },
  {
    name: 'Wilton Ferraz',
    description: 'Doutorando em Engenharia Elétrica pela Universidade Estadual de Ca',
    picture: 'img/photos/wilton.png',
    link: 'http://lattes.cnpq.br/4328187599187471'
  }
]
function Support() {
  return (
    <div className="SupportTeam">
      <SectionTitle text="Support and Research Team" />
      <div className="containerMembers">
        {members.map(e => (
          <CardMember member={e} />
        ))}
      </div>
    </div>
  )
}

export default Support
