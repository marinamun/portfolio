import { Link } from "react-router-dom";
import "../CSS files/Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <p>Homepage</p>
        </Link>
        <Link to="/about">
          <p>About page</p>
        </Link>
      </nav>
    </>
  );
};
export default Navbar;
