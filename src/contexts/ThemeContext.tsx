import React from "react";
import { createContext } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (them: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: (theme) => [],
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
