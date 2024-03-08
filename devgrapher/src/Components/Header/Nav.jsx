import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";
import { FaHome, FaRegUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdOutlineContactMail } from "react-icons/md";

const Nav = ({ toggleNavBar }) => {
  const navLinks = [
    { name: "Home", icon: <FaHome />, link: "header" },
    { name: "Projects", icon: <GrProjects />, link: "projects" },
    { name: "About", icon: <FaRegUser />, link: "about" },
    { name: "Contact Me", icon: <MdOutlineContactMail />, link: "contact" },
  ];

  const navOutput = navLinks.map((nav, i) => (
    <li key={i}>
      <ScrollLink
        to={nav.link}
        smooth={true}
        duration={500}
        onClick={toggleNavBar}>
        {nav.icon}
        {nav.name}
      </ScrollLink>
    </li>
  ));

  return (
    <div className="header-nav">
      <button onClick={toggleNavBar}>
        <IoClose />
      </button>
      <ul>{navOutput}</ul>
    </div>
  );
};

// validate props
Nav.propTypes = {
  toggleNavBar: PropTypes.func,
};

export default Nav;
