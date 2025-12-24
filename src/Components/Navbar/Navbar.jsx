import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { NavLinks } from "../../Constants/Navlinks";
import { Link, useLocation } from "react-router";

const Navbar = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setNavBg(window.scrollY >= 90);
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 transition-all duration-700
        ${
          navBg
            ? "top-12 w-[80%] h-16 bg-black/60 backdrop-blur-md rounded-full shadow-2xl z-20"
            : `top-0 w-full h-[12vh] z-10 ${
                location.pathname !== "/" ? "bg-black" : ""
              }`
        }`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold">EduX</h1>

        {/* Center: Links + Search */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Nav Links */}
          {NavLinks.map((navLink) => (
            <Link
              to={navLink.url}
              className="nav_link text-white text-lg font-medium"
            >
              {navLink.label}
            </Link>
          ))}

          {/* Search Bar */}
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-300" />
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 rounded-full bg-white/10 text-white
    placeholder-pink-300 outline-none focus:ring-2 focus:ring-pink-700"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Login */}
          <a
            href="/login"
            className="text-white font-medium hover:text-pink-700 transition"
          >
            Login
          </a>

          {/* Register */}
          <a
            href="/register"
            className="px-5 py-2 rounded-full bg-pink-700 text-white font-semibold hover:bg-pink-900 transition"
          >
            Register
          </a>

          {/* Mobile menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="h-8 w-8 text-white cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
