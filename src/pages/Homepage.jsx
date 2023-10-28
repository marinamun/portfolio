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
      <hr />
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
      <hr />
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
            <h3>Platform to buy and sell cats</h3>
            <h5>Web app using React and a json server</h5>
            <img
              src="https://img.freepik.com/premium-vector/business-bag-semi-flat-color-vector-object-leather-office-briefcase-carrying-important-documents-daily-essentials-isolated-modern-cartoon-style-illustration-graphic-design-animation_151150-5722.jpg"
              style={{ width: "100px" }}
            />
          </div>
          <div className="homepage-project">
            <h3>Cute game</h3>
            <h5>Using JavaScript, HTML and CSS</h5>
            <img
              src="https://img.freepik.com/premium-vector/business-bag-semi-flat-color-vector-object-leather-office-briefcase-carrying-important-documents-daily-essentials-isolated-modern-cartoon-style-illustration-graphic-design-animation_151150-5722.jpg"
              style={{ width: "100px" }}
            />
          </div>
          <div className="homepage-project">
            <h3>Weather app</h3>
            <h5>React app using an external API to fetch the data</h5>
            <img
              src="https://img.freepik.com/premium-vector/business-bag-semi-flat-color-vector-object-leather-office-briefcase-carrying-important-documents-daily-essentials-isolated-modern-cartoon-style-illustration-graphic-design-animation_151150-5722.jpg"
              style={{ width: "100px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
