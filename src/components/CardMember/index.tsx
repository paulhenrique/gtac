import React from 'react';
import './style.scss';

interface Member {
  name: string;
  description: string;
  link: string;
  picture: string;
}

interface CardMemberProps {
  member: Member;
}

const CardMember: React.FC<CardMemberProps> = ({ member }) => {
  return (
    <div className="cardMember">

      <div className="containerMemberImage">
        <img src={member.picture} alt={member.name} />
      </div>
      <div className="containerMemberDescription">
        <h3>{member.name}</h3>
        <p>{member.description}... <a href={member.link} target="_blank">Ver mais</a></p>
      </div>
    </div>
  )
}

export default CardMember;