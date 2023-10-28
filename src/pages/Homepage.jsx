import "../CSS files/Homepage.css";
const Homepage = () => {
  return (
    <>
      <div className="first-panel">
        <h1>Full stack developer🌺</h1>
        <img
          src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
          style={{ width: "150px" }}
        />
        <h3>Hi, my name is Marina</h3>
        <h5>Welcome to my portfolio</h5>
      </div>

      <div className="second-panel">
        <div>
          <h1>My expertise:</h1>
        </div>
        <div>
          <p>HTML and CSS</p>
          <p>JavaScript</p>
          <p>React Framework</p>
          <p>Node.js</p>
          <p>Express</p>
          <p>Mongo Databases</p>
          <p>Git and Github</p>
        </div>
      </div>

      <div className="third-panel">
        <h1>My favorite projects</h1>
        <div className="all-projects">
          <div className="homepage-project">
            <h3>Social media for coders</h3>
            <h5>Full-stack app using React and Node.js</h5>
            <img
              src="https://img.freepik.com/premium-vector/business-bag-semi-flat-color-vector-object-leather-office-briefcase-carrying-important-documents-daily-essentials-isolated-modern-cartoon-style-illustration-graphic-design-animation_151150-5722.jpg"
              style={{ width: "100px" }}
            />
          </div>

          <div className="homepage-project">
            <a
              href="https://gilded-belekoy-c59aee.netlify.app/"
              target="_blank"
            >
              <h3>Platform to buy and sell cats</h3>
              <h5>Web app using React and a json server</h5>
              <img
                src="https://img.freepik.com/premium-vector/business-bag-semi-flat-color-vector-object-leather-office-briefcase-carrying-important-documents-daily-essentials-isolated-modern-cartoon-style-illustration-graphic-design-animation_151150-5722.jpg"
                style={{ width: "100px" }}
              />
            </a>
          </div>
          <div className="homepage-project">
            <a
              href="https://marinamun.github.io/catch-the-butterflies/"
              target="_blank"
            >
              <h3>Cute game</h3>
              <h5>Using JavaScript, HTML and CSS</h5>
              <img
                src="https://img.freepik.com/premium-vector/business-bag-semi-flat-color-vector-object-leather-office-briefcase-carrying-important-documents-daily-essentials-isolated-modern-cartoon-style-illustration-graphic-design-animation_151150-5722.jpg"
                style={{ width: "100px" }}
              />
            </a>
          </div>
          <div className="homepage-project">
            <a
              href="https://master--superlative-moonbeam-ee9553.netlify.app/"
              target="_blank"
            >
              <h3>Weather app</h3>
              <h5>React app using an external API to fetch the data</h5>
              <img
                src="https://img.freepik.com/premium-vector/business-bag-semi-flat-color-vector-object-leather-office-briefcase-carrying-important-documents-daily-essentials-isolated-modern-cartoon-style-illustration-graphic-design-animation_151150-5722.jpg"
                style={{ width: "100px" }}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="fourth-panel">
        <h1>Contact me</h1>
        <div className="all-contacts">
          <a href="mailto:marinacerejidoo@gmail.com" target="_blank">
            {" "}
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
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
