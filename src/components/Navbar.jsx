import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="fixed flex h-20 w-full items-center justify-between bg-black  px-4 text-white">
      <div>
        <h1 className="ml-2 text-5xl ">Mark Venema</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer px-4 font-medium capitalize text-gray-500 duration-200 hover:scale-105"
          >
            <LinkScroll to={link} smooth duration={500}>
              {link}
            </LinkScroll>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="z-10 cursor-pointer pr-4 text-gray-500 md:hidden"
      >
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {isOpen && (
        <ul
          className="absolute left-0 top-0 flex h-screen 
      w-full flex-col items-center justify-center bg-gradient-to-b  from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer px-4 py-6 text-4xl
        capitalize "
            >
              <LinkScroll
                onClick={() => setIsOpen(false)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </LinkScroll>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
