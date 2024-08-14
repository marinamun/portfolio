import React, { useState } from "react";
import "../CSS files/ProjectsAccordion.css";

const ProjectsAccordion = () => {
  // Create a state to track the index of the currently active accordion
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the accordion item
  const handleAccordionClick = (index) => {
    // Toggle between showing and hiding the accordion content
    // If the same index is clicked, it will close the panel, otherwise it will open the clicked one
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <h1>FAVOURITE PROJECTS</h1>

      <button
        className={`accordion project-name ${
          activeIndex === 0 ? "active" : ""
        }`}
        onClick={() => handleAccordionClick(0)}
      >
        SOCIAL MEDIA FOR CODERS
      </button>
      <div
        className={`panel ${activeIndex === 0 ? "show" : ""} project-inside`}
      >
        <p className="projects-tech">React, Node.js, Express.js, MongoDB</p>
        <div className="project-btns">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://lord-of-the-coders.netlify.app/"
            className="project-btn"
          >
            Try it
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/marinamun/frontend-project-coders"
            className="project-btn"
          >
            Check the code
          </a>
        </div>
      </div>

      <button
        className={`accordion project-name ${
          activeIndex === 1 ? "active" : ""
        }`}
        onClick={() => handleAccordionClick(1)}
      >
        PLAY CHESS
      </button>
      <div
        className={`panel ${activeIndex === 1 ? "show" : ""} project-inside`}
      >
        <p className="projects-tech">React, CSS</p>
        <div className="project-btns">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://bazu-chess.netlify.app/"
            className="project-btn"
          >
            Try it
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/marinamun/chess"
            className="project-btn"
          >
            Check the code
          </a>
        </div>
      </div>

      <button
        className={`accordion project-name ${
          activeIndex === 2 ? "active" : ""
        }`}
        onClick={() => handleAccordionClick(2)}
      >
        ONLINE CAT MARKET
      </button>
      <div
        className={`panel ${activeIndex === 2 ? "show" : ""} project-inside`}
      >
        <p className="projects-tech">HTML, CSS, React</p>
        <div className="project-btns">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gilded-belekoy-c59aee.netlify.app/"
            className="project-btn"
          >
            Try it
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/marinamun/frontend-repo-cats"
            className="project-btn"
          >
            Check the code
          </a>
        </div>
      </div>

      <button
        className={`accordion project-name ${
          activeIndex === 3 ? "active" : ""
        }`}
        onClick={() => handleAccordionClick(3)}
      >
        BUTTERFLY GAME
      </button>
      <div
        className={`panel ${activeIndex === 3 ? "show" : ""} project-inside`}
      >
        <p className="projects-tech">HTML, CSS, JavaScript</p>
        <div className="project-btns">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://marinamun.github.io/catch-the-butterflies/"
            className="project-btn"
          >
            Try it
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/marinamun/catch-the-butterflies"
            className="project-btn"
          >
            Check the code
          </a>
        </div>
      </div>

      <button
        className={`accordion project-name ${
          activeIndex === 4 ? "active" : ""
        }`}
        onClick={() => handleAccordionClick(4)}
      >
        WEATHER APP
      </button>
      <div
        className={`panel ${activeIndex === 4 ? "show" : ""} project-inside`}
      >
        <p className="projects-tech">React, CSS</p>
        <div className="project-btns">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://master--superlative-moonbeam-ee9553.netlify.app/"
            className="project-btn"
          >
            Try it
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/marinamun/react-weather-app"
            className="project-btn"
          >
            Check the code
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectsAccordion;
