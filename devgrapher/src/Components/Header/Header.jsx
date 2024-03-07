import { useState } from "react";
import HeaderFixed from "./HeaderFixed";
import Nav from "./Nav";
import Hero from "./Hero";

const Header = () => {
  const [menuOpen, setIsMenuOpen] = useState(false);

  // Toggle Nav Section
  // passed down as props into HeaderFixed component
  const NavBar = () => {
    setIsMenuOpen((prevView) => !prevView);
  };

  return (
    <div className="header">
      <HeaderFixed toggleNavBar={NavBar} />
      {menuOpen && <Nav toggleNavBar={NavBar} />}
      <Hero />
    </div>
  );
};

export default Header;
