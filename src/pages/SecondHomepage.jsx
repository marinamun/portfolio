
import profile from "../images/profile.png"
import "../CSS files/SecondHomepage.css"
const SecondHomepage = () =>{
    return (
      <>
        <div className="homepage-panel1">
          <img src={profile}  />
          <h4>
            Hello! I'm Marina, a full-stack developer with a passion for
            creating seamless digital experiences. Beyond coding, I enjoy
            playing chess and boxing. I’m excited at the prospect of joining
            your team :)
          </h4>
        </div>
      </>
    );
}
export default SecondHomepage;