import React from 'react';
import './Subtitle.scss';

interface Props {
  text: string;
}

const Subtitle:React.FC<Props> = ({ text }) => {
  return <h3 className="subtitle">{text}</h3>;
};

export default Subtitle;
