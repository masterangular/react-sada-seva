import React, { useState}from "react";

import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { BsFill1SquareFill } from "react-icons/bs";
import { HiOutlineMenuAlt4} from 'react-icons/hi'
import { AiOutlineClose } from "react-icons/ai";
import Contact from "./Contact";

const Banner = () => {
  const linkItems = [
    { name: "home", link: "/" },
    { name: "HowitWorks", link: "/HowitWorks" },
    { name: "About", link: "/About" },
    { name: "Gallery", link: "/Gallery" },
    { name: "Contact", link: "/Contact" },
  ];
  const [nav, setNav] = useState(false)
  const handleNav = () =>{
    setNav(!nav)
  }

  return (
    <>
      {/* <div>
            <BsFill1SquareFill></BsFill1SquareFill>
        </div> */}
      <nav className="w-full flex md:justify-center justify-between items-center p-4 absolute z-10  tracking-widest">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <img src={logo} alt="logo" className="w-32 cursor-pointer " />
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
          <li className="bg-gradient-to-r from-orange-400 to-pink-500 py-2 px-7 mx-4 rounded-lg cursor-pointer font-bold">
            <NavLink to="/Donate">Donate</NavLink>
          </li>
        </ul>
        
        {/* Hamburger */}

        <div  onClick={handleNav} className="md:hidden z-10 -pt-10">
        {nav ? < AiOutlineClose size={38} className="text-red-500 p-2 bg-blue-400 rounded-full font-extrabold " /> : 
        <HiOutlineMenuAlt4 className="text-blue-500" size={24} />
        }
          
        </div>

        {/* Mobile view */}

        <div onClick={handleNav} className={nav ? "absolute md:hidden duration-200 bg-gradient-to-r from-purple-500 to-pink-500 left-0 top-0 w-full px-4 py-7 h-screen flex flex-col" : 'absolute left-[-100%]'}>
        <h1 className="text-center text-4xl font-sans bg-clip-text bg-gradient-to-l from-yellow-400 to-red-500  text-transparent font-extrabold uppercase">sadaseva organization</h1>
        <ul className="text-white text-center md:flex list-none flex-row justify-start items-start flex-initial capitalize px-4">
          {linkItems.map((link) => (
            <li
              key={link.name}
              className="md:ml-5 p-6 text-lg font-semibold hover:text-yellow-400 ml-3 duration-500 hover:underline underline-offset-4 hover:bg-gray-400 hover:duration-100 "
            >
              <NavLink to={link.link} className="">
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className=" py-2 px-7 mx-4 rounded-lg cursor-pointer  font-bold  text-center">
            <NavLink to="/Donate">Donate</NavLink>
          </li>
        </ul>
        </div>
      </nav>
    </>
  );
};

export default Banner;
