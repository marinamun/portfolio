import profile from "../images/profile.png";
import "../CSS files/SecondHomepage.css";
import Projects from "../components/ProjectsAccordion";
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
    </>
  );
};
export default SecondHomepage;
