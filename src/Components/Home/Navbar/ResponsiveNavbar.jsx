import { useState } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => {
    setShowNav(true);
  };
  const closeNavHandler = () => {
    setShowNav(false);
  };
  return (
    <div>
      <Navbar openNav={showNavHandler} />
      <MobileNavbar showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNavbar;
