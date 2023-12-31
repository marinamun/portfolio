import "../CSS files/Homepage.css";
import profile from "../images/profile.png";
import cats from "../images/catmarketphoto.png";
import weather from "../images/weatherphoto.png";
import game from "../images/gamephoto.png";
import coders from "../images/lordofcoders.png";
import skills from "../images/skills.png";
import achieve from "../images/achieve.png";
const Homepage = () => {
  return (
    <>
      <div className="first-panel">
        <h1> Full-stack developer</h1>
        <div className="intro">
          <img
            src={profile}
            style={{ width: "250px" }}
            className="profile-pic"
          />
          <h4>
            Hi!👋🏼My name is <span className="highlighted-words">Marina</span>{" "}
            and I'm a junior{" "}
            <span className="highlighted-words">full-stack developer</span>{" "}
            based in <span className="highlighted-words">Berlin</span>. I'm
            driven to learn and improve,{" "}
            <span className="highlighted-words">dedicated</span> to becoming
            your perfect team addition. As evidence of my determination, I
            acquired my technical skills and{" "}
            <span className="highlighted-words">successfully</span> completed
            four projects within a mere 10-week span. Scroll down to check my
            projects!
          </h4>
        </div>
        <hr />
      </div>

      <div className="second-panel">
        <h1>Skills:</h1>
        <div className="all-skills">
          <h3>
            <div className="skill-list">
              <div className="skill">HTML</div>&nbsp;•&nbsp;
              <div className="skill">CSS</div>&nbsp;•&nbsp;
              <div className="skill"> JAVASCRIPT</div>&nbsp;•&nbsp;
              <div className="skill"> REACT</div>&nbsp;•&nbsp;
              <div className="skill"> TYPESCRIPT</div>&nbsp;•&nbsp;
              <div className="skill"> NODE.JS</div>&nbsp;•&nbsp;
              <div className="skill"> EXPRESS.JS</div>&nbsp;•&nbsp;
              <div className="skill"> MONGO DB</div>&nbsp;•&nbsp;
              <div className="skill">GIT</div>&nbsp;•&nbsp;
              <div className="skill"> GITHUB</div>
            </div>
          </h3>
        </div>

        <img src={skills} />
        <hr />
      </div>

      <div className="third-panel">
        <h1>My favorite projects:</h1>
        <div className="all-projects">
          <div className="homepage-project">
            <div className="inside-card">
              <div>
                <img src={coders} style={{ width: "200px" }} />
                <h3>SOCIAL MEDIA</h3>
                <h5>
                  Responsive app for coders to ask and answer coding questions.
                  It's a full-stack app using React, Node.js and MongoDB.
                </h5>
                <div className="project-buttons">
                  <a
                    id="button-left"
                    href="https://github.com/marinamun/frontend-project-coders"
                    target="_blank"
                  >
                    Repository
                  </a>
                  <a
                    id="button-right"
                    href="https://lord-of-the-coders.netlify.app/"
                    target="_blank"
                  >
                    Try it
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="homepage-project">
            <div className="inside-card">
              <div>
                <img src={cats} style={{ width: "200px" }} />
                <h3>ONLINE MARKET</h3>
                <h5>
                  An online ecommerce platform to buy and sell cats. It's a web
                  app using React and a json server.
                </h5>
                <div className="project-buttons">
                  <a
                    id="button-left"
                    href="https://github.com/marinamun/frontend-repo-cats"
                    target="_blank"
                  >
                    Repository
                  </a>
                  <a
                    id="button-right"
                    href="https://gilded-belekoy-c59aee.netlify.app/"
                    target="blank_"
                  >
                    Try it
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="homepage-project">
            <div className="inside-card">
              <div>
                <img src={game} style={{ width: "200px" }} />
                <h3>GAME</h3>
                <h5>
                  A cute game where you can shoot and earn lives in order to
                  avoid being bitten by a mosquito. Using JavaScript, HTML and
                  CSS.
                </h5>
                <div className="project-buttons">
                  <a
                    id="button-left"
                    href="https://github.com/marinamun/catch-the-butterflies"
                    target="_blank"
                  >
                    Repository
                  </a>
                  <a
                    id="button-right"
                    href="https://marinamun.github.io/catch-the-butterflies/"
                    target="_blank"
                  >
                    Try it
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="homepage-project">
            <div className="inside-card">
              <div>
                <img src={weather} style={{ width: "200px" }} />
                <h3>WEATHER APP</h3>
                <h5>
                  Weather app with forecast and live animations. It's a react
                  app using an external API to fetch the data.
                </h5>
                <div className="project-buttons">
                  <a
                    id="button-left"
                    href="https://github.com/marinamun/react-weather-app"
                    target="_blank"
                  >
                    Repository
                  </a>
                  <a
                    id="button-right"
                    href="https://master--superlative-moonbeam-ee9553.netlify.app/"
                    target="_blank"
                  >
                    Try it
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="homepage-project">
            <div className="inside-card">
              <div>
                <img src={achieve} style={{ width: "200px" }} />
                <h3>TASK TRACKER</h3>
                <h5>
                  An app to add tasks with deadlines and mark them as completed
                  when finished. Made using TypeScript, React and CSS.
                </h5>
                <div className="project-buttons">
                  <a
                    id="button-left"
                    href="https://github.com/marinamun/typescript-toDo"
                    target="_blank"
                  >
                    Repository
                  </a>
                  <a
                    id="button-right"
                    href="https://achieve-tasktracker.netlify.app/"
                    target="_blank"
                  >
                    Try it
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className="fourth-panel">
        <h1>🕊️Contact me:</h1>
        <div className="all-contacts">
          <a href="mailto:marinacerejidoo@gmail.com" target="_blank">
            Email{" "}
            {/* <img
              src="https://static-00.iconduck.com/assets.00/mail-icon-2048x2048-525ey8hu.png"
              style={{ width: "40px" }}
            /> */}
          </a>
          <a href="www.linkedin.com/in/marinamun" target="_blank">
            Linkedin
            {/* <img
              src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473"
              style={{ width: "40px" }}
            /> */}
          </a>
          <a href="https://www.linkedin.com/in/marinamun/" target="_blank">
            Github
            {/* <img
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              style={{ width: "40px" }}
            /> */}
          </a>
        </div>
      </div>
    </>
  );
};
export default Homepage;
