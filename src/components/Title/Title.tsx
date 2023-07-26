import React from "react";
import "./Title.scss";

interface Props {
  text: string;
}

const Title: React.FC<Props> = ({ text }) => {
  return <h1 className="title">{text}</h1>;
};

export default Title;
