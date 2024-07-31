import React from "react";
import profile from "../images/profile.png";
import "../CSS files/SecondHomepage.css";
import Projects from "../components/ProjectsAccordion";
import goldfinch from "../images/goldfinch.jpg";

const SecondHomepage = () => {
  return (
    <>
      <div className="homepage-panel1">
        <img src={profile} />
        <h4>
          Hello! I'm Marina, a full-stack developer with a passion for creating
          seamless digital experiences. Beyond coding, I enjoy playing chess and
          boxing. I’m excited at the prospect of joining your team :)
        </h4>
      </div>
      <div className="homepage-panel2">
        <h1>MY TECH STACK</h1>
        <div className="tech-stack">
          <div className="panel2-row to-the-left">
            <p>
              <span>HTML</span>
            </p>
            <p>
              <span>CSS</span>
            </p>
            <p>
              <span>JAVASCRIPT</span>
            </p>
          </div>
          <div className="panel2-row to-the-right">
            <p>
              <span>NODE.JS</span>
            </p>
            <p>
              <span>REACT</span>
            </p>
            <p>
              <span>EXPRESS.JS</span>
            </p>
          </div>
          <div className="panel2-row to-the-left">
            <p>
              <span>MONGODB</span>
            </p>
            <p>
              <span>FIREBASE</span>
            </p>
            <p>
              <span>GIT</span>
            </p>
          </div>
          <div className="panel2-row to-the-right">
            <p>
              <span>GITHUB</span>
            </p>
            <p>
              <span>RESPONSIVE DESIGN</span>
            </p>
            <p>
              <span>DEPLOYMENT</span>
            </p>
          </div>
        </div>
      </div>

      <div className="homepage-panel3">
        <Projects />
      </div>
      <div className="homepage-panel4">
        <div>
          <img src={goldfinch} />
        </div>
        <div className="cvs">
          <a
            className="cv-btn"
            href="https://www.canva.com/design/DAF8Idh455c/7iYtUY1V-On0cOO8KpFoyA/edit?utm_content=DAF8Idh455c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
          >
            CV
          </a>
          <a
            className="cv-btn"
            href="https://www.canva.com/design/DAF8ITsYW9w/c9JU-NC9gLfAvM9JzTi1FQ/edit?utm_content=DAF8ITsYW9w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
          >
            Lebenslauf
          </a>
        </div>
      </div>

      <div className="homepage-panel5">
        <a
          href="mailto:marinacerejidoo@gmail.com"
          class="email-btn"
          className="email"
        >
          ~ Contact Me ~
        </a>
      </div>
    </>
  );
};
export default SecondHomepage;
