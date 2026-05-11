import React from "react";

function ThemeToggle({
  darkMode,
  setDarkMode
}) {

  return (

    <div className="theme">

      <button
        onClick={() =>
          setDarkMode(!darkMode)
        }
      >
        🌙 Toggle theme
      </button>

    </div>
  );
}

export default ThemeToggle;