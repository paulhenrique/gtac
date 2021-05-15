import React from 'react'
import CardMember from '../CardMember';
import SectionTitle from '../SectionTitle'
import './style.scss';

const members = [
  {
    name: 'Carlos Santos',
    description: 'Doutor em Egenharia Elétrica pela Universidade Estadual de Campinas',
    picture: 'img/photos/carlos.png',
    link: 'aaaa'
  },
  {
    name: 'Danilo C. Bueno',
    description: 'Mestre em Ciência da Computação pela Universidade Federal de São Carlos',
    picture: 'img/photos/danilo.png',
    link: 'aaaa'
  },
  {
    name: 'Paulo Henrique',
    description: 'Graduando em Licenciatura em Física pelo IFSP Campus itapetininga',
    picture: 'img/photos/paulo.png',
    link: 'aaaa'
  },
  {
    name: 'Wilton Ferraz',
    description: 'Doutorando em Engenharia Elétrica pela Universidade Estadual de Campinas',
    picture: 'img/photos/wilton.png',
    link: 'aaaa'
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
