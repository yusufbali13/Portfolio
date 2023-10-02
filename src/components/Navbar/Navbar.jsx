import "./Navbar.scss";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-scroll";
import About from "../../pages/about/About";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "Resume",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div
      id="navbar-bcg"
      className="flex justify-center items-center w-full h-20 px-4 text-indigo-600  fixed nav"
    >
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            id="nav-color"
            className=" nav-links px-5 cursor-pointer capitalize font-medium text-xl   text-white hover:scale-105 hover: duration-200 link-underline text-xl"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-violet-700">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default NavBar;
