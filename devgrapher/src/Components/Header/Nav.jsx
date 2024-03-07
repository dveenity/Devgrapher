import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

const Nav = ({ toggleNavBar }) => {
  return (
    <div className="header-nav">
      <button onClick={toggleNavBar}>
        <IoClose />
      </button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact Me</li>
      </ul>
    </div>
  );
};

// validate props
Nav.propTypes = {
  toggleNavBar: PropTypes.func,
};

export default Nav;
