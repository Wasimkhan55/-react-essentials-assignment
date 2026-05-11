import React from "react";
import "./App.css";

function App() {
  const skills = [
    "Design Systems",
    "React",
    "TypeScript",
    "Figma",
    "Prototyping",
    "Accessibility",
  ];

  return (
    <div className="container">
      <div className="card">

        <div className="top">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="profile"
          />

          <div>
            <h1>TuteDude</h1>

            <h3>Product Designer & Frontend Engineer</h3>
          </div>

        </div>

        <p className="bio">
          I design and build calm, focused product experiences
          for fast-moving teams. Currently exploring AI-assisted
          interfaces, design systems, and high-performance UI
          engineering.
        </p>

        <h4>Skills</h4>

        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index} className="badge">
              {skill}
            </span>
          ))}
        </div>

        <div className="bottom">

          <div className="left">
            🌙 Dark
          </div>

          <div className="middle">
            ❮ ❯ 1 / 4
          </div>

          <div className="right">
            ❤️ 128

            <button>Contact</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;