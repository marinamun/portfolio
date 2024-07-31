import React, { useState } from "react";
import "../CSS files/ProjectsAccordion.css";

const ProjectsAccordion = () => {
  // Create a state to track the index of the currently active accordion
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the accordion item
  const handleAccordionClick = (index) => {
    // Toggle between showing and hiding the accordion content
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <h1>Projects</h1>
      <button
        className={`accordion ${
          activeIndex === 0 ? "active" : ""
        } project-name`}
        onClick={() => handleAccordionClick(0)}
      >
        SOCIAL MEDIA FOR CODERS
      </button>
      <div className={`panel ${activeIndex === 0 ? "show" : ""}`}>
        <p className="projects-tech">React, Node.js, Express.js, MongoDB</p>
        <div className="project-btns">
          <a
            href="https://lord-of-the-coders.netlify.app/"
            className="project-btn"
          >
            Try it
          </a>
          <a
            href="https://github.com/marinamun/frontend-project-coders"
            className="project-btn"
          >
            Check the code
          </a>
        </div>
      </div>

      <button
        className={`accordion ${
          activeIndex === 0 ? "active" : ""
        } project-name`}
        onClick={() => handleAccordionClick(1)}
      >
        ONLINE CAT MARKET
      </button>
      <div className={`panel ${activeIndex === 1 ? "show" : ""}`}>
        <p>Lorem ipsum...</p>
      </div>

      <button
        className={`accordion ${
          activeIndex === 0 ? "active" : ""
        } project-name`}
        onClick={() => handleAccordionClick(2)}
      >
        BUTTERFLY GAME
      </button>
      <div className={`panel ${activeIndex === 2 ? "show" : ""}`}>
        <p>Lorem ipsum...</p>
      </div>
    </>
  );
};

export default ProjectsAccordion;
