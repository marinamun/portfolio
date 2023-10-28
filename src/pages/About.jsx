import "../CSS files/About.css";
const About = () => {
  return (
    <>
      <h1>About page🎀</h1>
      <div className="about-container">
        <div className="education-panel">
          <h3>Education</h3>
          <p>
            I did a fullstack bootcamp at Ironhack and <br/>self-learned to expand my
            knowledge and skills
          </p>
        </div>

        <div className="personal-panel">
          <h3>Personal</h3>
          <p>Chess and teaching Spanish online</p>
        </div>
      </div>
    </>
  );
};
export default About;
