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
      <a target="_blank" href={member.link}>
        <div className="containerMemberImage">
          <img src={member.picture} alt={member.name} />
        </div>
      </a>
      <a target="_blank" href={member.link}>
        <div className="containerMemberDescription">
          <h3>{member.name}</h3>
          <p>{member.description}</p>
        </div>
      </a>
    </div>
  )
}

export default CardMember;