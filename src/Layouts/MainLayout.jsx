import React from "react";
import { Outlet } from "react-router";

import Footer from "../Components/Footer/Footer";
import ResponsiveNavbar from "../Components/Navbar/ResponsiveNavbar";

const MainLayout = () => {
  return (
    <div>
      <header>
        <ResponsiveNavbar />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
