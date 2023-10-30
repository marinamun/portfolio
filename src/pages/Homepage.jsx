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
            style={{ width: "150px" }}
            className="profile-pic"
          />
          <h3>
            👋🏼 Hi, my name is Marina
            <br />
            🌍 I'm a Spanish developer based in Berlin
          </h3>
        </div>
      </div>

      <div className="second-panel">
        <h1>Skills:</h1>
        <img src={skills} style={{ width: "500px" }} />
      </div>

      <div className="third-panel">
        <h1>My favorite projects:</h1>
        <div className="all-projects">
          <div className="homepage-project">
            <div className="inside-card">
              <img
                src="https://img.freepik.com/premium-vector/business-bag-semi-flat-color-vector-object-leather-office-briefcase-carrying-important-documents-daily-essentials-isolated-modern-cartoon-style-illustration-graphic-design-animation_151150-5722.jpg"
                style={{ width: "100px" }}
              />
              <div>
                <h3>Social media for coders</h3>
                <h5>Full-stack app using React and Node.js</h5>
              </div>
            </div>
          </div>

          <div className="homepage-project">
            <div className="inside-card">
              <img src={cats} style={{ width: "220px" }} />
              <div>
                <h3>Platform to buy and sell cats</h3>
                <h5>Web app using React and a json server</h5>
                <a
                  href="https://gilded-belekoy-c59aee.netlify.app/"
                  target="_blank"
                >
                  Go
                </a>
              </div>
            </div>
          </div>
          <div className="homepage-project">
            <div className="inside-card">
              <img src={game} style={{ width: "220px" }} />
              <div>
                <h3>Cute game</h3>
                <h5>Using JavaScript, HTML and CSS</h5>
                <a
                  href="https://marinamun.github.io/catch-the-butterflies/"
                  target="_blank"
                >
                  Go
                </a>
              </div>
            </div>
          </div>
          <div className="homepage-project">
            <div className="inside-card">
              <img src={weather} style={{ width: "220px" }} />
              <div>
                <h3>Weather app</h3>
                <h5>React app using an external API to fetch the data</h5>
                <a
                  href="https://master--superlative-moonbeam-ee9553.netlify.app/"
                  target="_blank"
                >
                  Go
                </a>
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

      <div className="new">
        You might think I’m just another developer. And it is true. But I’m also
        very focused on learning and becoming better. So have no doubt, that I
        will give my all in my next job. I’m excited to be part of a team, build
        together and learn from and with them. A pawn might move slowly and seem
        irrelevant, but it can reach its fullest potential by becoming a queen
        and wining. I’m the pown.
      </div>
    </>
  );
};
export default Homepage;
