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
        BEE SOCIAL🐝
      </button>
      <div
        className={`panel ${activeIndex === 0 ? "show" : ""} project-inside`}
      >
        <p>
          Social media app to create posts, interact with them and chat with other users.
        </p>
        <p className="projects-tech">React, Node.js, Express.js, MongoDB, Socket.IO</p>
        <div className="project-btns">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://bee-social.netlify.app/"
            className="project-btn"
          >
            Try it
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/marinamun/socials-frontend"
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
        SPOTITUBE
      </button>
      <div
        className={`panel ${activeIndex === 1 ? "show" : ""} project-inside`}
      >
        <p>
          Mix of Youtube and Spotify: View detailed song info, curate favorite tracks in your profile, and{" "}
          <br />
          enjoy music and videos without needing a Spotify Premium account.
        </p>
        <p style={{fontSize:"10px"}}>Note: This project is hosted on Render's free tier, which may take up to 50 seconds to load the first time due to instance spin-up.</p>
        <p className="projects-tech">
          React, Node.js, Firebase, Spotify and YouTube APIs
        </p>
        <div className="project-btns">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://spotitube.netlify.app/"
            className="project-btn"
          >
            Try it
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/marinamun/myspotify"
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
        PLAY CHESS
      </button>
      <div
        className={`panel ${activeIndex === 2 ? "show" : ""} project-inside`}
      >
        <p>Play chess against one of our 3 chess bots</p>
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

      {/* <button
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
        <p>
          Post an ad to sell your cat or buy one. No cat was harmed in the
          process.
        </p>
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
      </div> */}


      <button
        className={`accordion project-name ${
          activeIndex === 3 ? "active" : ""
        }`}
        onClick={() => handleAccordionClick(3)}
      >
        TYPING GAME
      </button>
      <div
        className={`panel ${activeIndex === 3 ? "show" : ""} project-inside`}
      >
        <p>
          Game that challenges players to improve their typing speed and accuracy.
        </p>
        <p className="projects-tech">Java</p>
        <p style={{marginTop:"2px"}}>Clone the repo and run the JAR file to play the game</p>
        <div className="project-btns">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/marinamun/TypingGame"
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
        BUTTERFLY GAME
      </button>
      <div
        className={`panel ${activeIndex === 4 ? "show" : ""} project-inside`}
      >
        <p>Catch the butterflies and run away from the mosquitos</p>
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
          activeIndex === 5 ? "active" : ""
        }`}
        onClick={() => handleAccordionClick(5)}
      >
        WEATHER APP
      </button>
      <div
        className={`panel ${activeIndex === 5 ? "show" : ""} project-inside`}
      >
        <p>
          Check the weather in your favourite city. Unless you are in Berlin,
          <br />
          then you know it's always cloudy or raining.
        </p>
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
