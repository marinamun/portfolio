import "../CSS files/Homepage.css";
import profile from "../images/profile.png";
import cats from "../images/cat.png";
import weather from "../images/weather (2).png";
import game from "../images/game.png";
import skills from "../images/skills.png";
const Homepage = () => {
  return (
    <>
      <div className="first-panel">
        <h1> Full-stack developer</h1>
        <div className="intro">
          <img
            src={profile}
            style={{ width: "190px" }}
            className="profile-pic"
          />
          <h3>
            👋🏼 Hi, my name is Marina and I'm a Spanish
            <br />
            developer based in Berlin. I might not be the most
            <br />
            experienced one, but be sure that I will give put all the work
            <br />
            to be the missing piece of your team.
          </h3>
        </div>
      </div>

      <div className="second-panel">
        <h1>Skills:</h1>
        <div className="all-skills">
          <h3>
            <div className="skill">HTML</div>&nbsp;•&nbsp;
            <div className="skill">CSS</div>&nbsp;•&nbsp;
            <div className="skill"> JAVASCRIPT</div>&nbsp;•&nbsp;
            <div className="skill"> REACT</div>&nbsp;•&nbsp;
            <div className="skill"> NODE.JS</div>&nbsp;•&nbsp;
            <div className="skill"> EXPRESS</div>&nbsp;•&nbsp;
            <div className="skill"> MONGO DB</div>&nbsp;•&nbsp;
            <div className="skill">GIT</div>&nbsp;•&nbsp;
            <div className="skill"> GITHUB</div>
          </h3>
        </div>

        <img src={skills} style={{ width: "500px" }} />
      </div>

      <div className="third-panel">
        <h1>My favorite projects:</h1>
        <div className="all-projects">
          <div className="homepage-project">
            <div className="inside-card">
              <div>
                <h3>SOCIAL MEDIA</h3>
                <h5>Full-stack app using React and Node.js</h5>
              </div>
            </div>
          </div>

          <div className="homepage-project">
            <div className="inside-card">
              <div>
                <h3>ONLINE MARKET</h3>
                <h5>Web app using React and a json server</h5>
                <a
                  href="https://gilded-belekoy-c59aee.netlify.app/"
                  target="_blank"
                ></a>
              </div>
            </div>
          </div>
          <div className="homepage-project">
            <div className="inside-card">
              <div>
                <h3>GAME</h3>
                <h5>Using JavaScript, HTML and CSS</h5>
                <a
                  href="https://marinamun.github.io/catch-the-butterflies/"
                  target="_blank"
                ></a>
              </div>
            </div>
          </div>
          <div className="homepage-project">
            <div className="inside-card">
              <div>
                <h3>WEATHER APP</h3>
                <h5>React app using an external API to fetch the data</h5>
                <a
                  href="https://master--superlative-moonbeam-ee9553.netlify.app/"
                  target="_blank"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fourth-panel">
        <h1>Contact me:</h1>
        <div className="all-contacts">
          <a href="mailto:marinacerejidoo@gmail.com" target="_blank">
            {" "}
            <img
              src="https://static-00.iconduck.com/assets.00/mail-icon-2048x2048-525ey8hu.png"
              style={{ width: "40px" }}
            />
          </a>
          <a href="www.linkedin.com/in/marinamun" target="_blank">
            <img
              src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473"
              style={{ width: "40px" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/marinamun/" target="_blank">
            <img
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              style={{ width: "40px" }}
            />
          </a>
        </div>
      </div>
    </>
  );
};
export default Homepage;
