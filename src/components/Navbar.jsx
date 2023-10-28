import { Link } from "react-router-dom";
const Navbar = () => {
    return (
      <>
        <nav>
          <Link to="/about">
            <p>About page</p>
          </Link>
          <Link to="/">
            <p>Homepage</p>
          </Link>
        </nav>
      </>
    );

}
export default Navbar;