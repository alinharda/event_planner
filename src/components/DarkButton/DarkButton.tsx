import React, { useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./DarkButton.scss";

const DarkButton: React.FC = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className={`darkButton ${theme === "dark" ? "on" : ""}`} onClick={handleClick}>
      <div className="background">
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default DarkButton;
