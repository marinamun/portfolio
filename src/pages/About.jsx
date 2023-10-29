import "../CSS files/About.css";
const About = () => {
  return (
    <>
      <h1>About page🎀</h1>
      <div className="about-container">
        <div className="education-panel">
          <h3>Education</h3>
          <p>
            During my time at Ironhack's full-stack boot camp, I immersed myself
            in intensive coding classes and projects. Through this hands-on
            experience, I mastered both front-end and back-end development.
            Since then, I've continued my learning journey independently, diving
            into advanced topics and working on diverse side projects, further
            enhancing my skills as a full-stack developer.
          </p>
        </div>

        <div className="personal-panel">
          <h3>Personal</h3>
          <p>
            Chess and languages have been significant parts of my life for many
            years. After earning my MA in languages, I taught
            Spanish online and grew a significant audience.
            Simultaneously, I worked as the head of a department for a tech
            startup that taught Spanish. Soon after, I discovered
            my passion for coding. For me, coding became a harmonious blend of
            language learning intricacies and the creative logic found in chess,
            sparking my enthusiasm for problem-solving and innovation.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
