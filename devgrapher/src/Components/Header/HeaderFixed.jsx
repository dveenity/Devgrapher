import DarkMode from "../Custom/DarkMode";
import logo from "/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import PropTypes from "prop-types";

const HeaderFixed = ({ toggleNavBar }) => {
  return (
    <div className="header-fixed">
      <img src={logo} alt="logo-image" />
      <div>
        <DarkMode />
        <button onClick={toggleNavBar}>
          <RxHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

// validate props
HeaderFixed.propTypes = {
  toggleNavBar: PropTypes.func,
};

export default HeaderFixed;
