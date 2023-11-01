import React from "react";

import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { BsFill1SquareFill } from "react-icons/bs";

const Banner = () => {
  const linkItems = [
    { name: "home", link: "/" },
    { name: "HowitWorks", link: "/HowitWorks" },
    { name: "About", link: "/About" },
    { name: "Gallery", link: "/Gallery" },
    { name: "Contact", link: "/Contact" },
  ];

  return (
    <>
      {/* <div>
            <BsFill1SquareFill></BsFill1SquareFill>
        </div> */}
      <nav className="w-full flex md:justify-center justify-between items-center p-4  bg-gradient-to-r from-cyan-500 to-blue-500 tracking-widest">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial capitalize">
          {linkItems.map((link) => (
            <li
              key={link.name}
              className="md:ml-5 text-lg font-semibold hover:text-yellow-400 ml-3 duration-500 hover:underline underline-offset-4 "
            >
              <NavLink to={link.link} className="">
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-7 mx-4 rounded-lg cursor-pointer hover:bg-[#2546bd] font-bold">
            <NavLink to="/Donate">Donate</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Banner;
