import React from 'react'
import CardMember from '../CardMember';
import SectionTitle from '../SectionTitle'
import './style.scss';

const members = [
  {
    name: 'Carlos Santos',
    description: 'Orientador, Supervisor do ElectrosFI e Pesquisador Responsável',
    picture: 'img/photos/carlos.png',
    link: 'aaaa'
  },
  {
    name: 'Carlos Santos',
    description: 'Orientador, Supervisor do ElectrosFI e Pesquisador Responsável',
    picture: 'img/photos/carlos.png',
    link: 'aaaa'
  },
  {
    name: 'Carlos Santos',
    description: 'Orientador, Supervisor do ElectrosFI e Pesquisador Responsável',
    picture: 'img/photos/carlos.png',
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
