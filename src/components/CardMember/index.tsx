import React from 'react';
import './style.scss';

export interface Member {
  name: string;
  shortDescription: string;
  lattesOrLinkedin: string;
  photoURL: string;
}

interface CardMemberProps {
  member: Member;
}

const CardMember: React.FC<CardMemberProps> = ({ member }) => {
  return (
    <div className="cardMember">

      <div className="containerMemberImage">
        <img src={member.photoURL} alt={member.name} />
      </div>
      <div className="containerMemberDescription">
        <h3>{member.name}</h3>
        <p>{member.shortDescription}... <a href={member.lattesOrLinkedin} target="_blank" rel="noreferrer">Ver mais</a></p>
      </div>
    </div>
  )
}

export default CardMember;