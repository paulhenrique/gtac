import React from 'react';
import './style.scss';


interface titleStyle {
  text: string
}

const SectionTitle: React.FC<titleStyle> = ({ text }) => {
  return (
    <h1 className="sectionTitle">{text}</h1>
  )
}

export default SectionTitle;
