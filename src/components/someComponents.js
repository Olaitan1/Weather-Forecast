import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function SomeComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      {/* rest of your component */}
    </div>
  );
}
