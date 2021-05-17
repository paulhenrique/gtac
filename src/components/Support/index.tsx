import React from 'react';
import CardMember from '../CardMember';
import SectionTitle from '../SectionTitle';
import './style.scss';
import { useGeneral } from '../../contexts/general';

function Support() {
  const { team } = useGeneral();
  return (
    <div className="SupportTeam">
      <SectionTitle text="Support and Research Team" />
      <div className="containerMembers">
        {team.map(e => (
          <CardMember member={e} />
        ))}
      </div>
    </div>
  )
}

export default Support;
