import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../images/logo.png";
import beach from "../../images/beach.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
import { HiOutlineChevronRight } from "react-icons/hi";
import {
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
  BsInstagram,
  BsChevronRight,
} from "react-icons/bs";

const linkItems = [
  { name: "home", link: "/" },
  { name: "HowitWorks", link: "/HowitWorks" },
  { name: "About", link: "/About" },
  { name: "Gallery", link: "/Gallery" },
  { name: "Contact", link: "/Contact" },
  { name: "Donate", link: "/Donate" },
];
const socialMedia = [
  { icon: "instagram", link: "/" },
  { icon: "twitter", link: "/" },
  { icon: "youtube", link: "/" },
  { icon: "whatsApp", link: "/" },
];

const Footer = () => (
  <div className="w-full h-full  relative ">
    <img
      className="w-screen h-screen sm:h-96 object-cover  justify-center items-center"
      src={beach}
    />
     <div className="absolute tracking-widest w-screen h-full top-0 left-0 bg-gray-900/30">
    <div className="md:justify-center justify-between items-center ml-5 mt-10 text-gray-200">
      <div className="max-w-7xl max-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 flex">
          <div className="mb-5 flex-col flex">
            <img src={logo} alt="logo" className="w-32 " />
            <p className="uppercase text-yellow-500 font-bold pt-5 sm:text-lg">
              sadaseva organization
            </p>
            <br />
            {/* <p className="text-justify text-sm  text-ellipsis  overflow-hidden hover:text-clip  -ml-4">
              <a>
                Contact us today and be part of the fastest-growing world of
                trading. We offer multi-currency support, allowing you to invest
                or withdraw in USDT, Bitcoin, Ethereum, and bank. Additionally,
                you can earn referral bonuses by referring your friends and
                family, adding another layer of excitement to your investment
                journey.
              </a>
            </p> */}
          </div>
          <div className="mb-5 text-yellow-600 font-semibold  capitalize pb-5 ml-8">
            <h4 className="mb-5 underline underline-offset-8">Useful Links</h4>
            <ul className="text-white">
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
            </ul>
          </div>
          
          <div className="mb-5  text-yellow-600 font-bold capitalize ">
            <h4 className="mb-5 underline underline-offset-8">
              connect with us
            </h4>
            <ul className="text-white">
              {socialMedia.map((link) => (
                <li
                  key={link.icon}
                  className="md:ml-5 text-lg font-semibold hover:text-yellow-400 ml-3 duration-500 hover:underline underline-offset-4 "
                >
                  <NavLink to={link.link} className="">
                    {link.icon}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-5  text-yellow-600 font-bold capitalize">
            <h4 className="pb-4 underline underline-offset-8">support</h4>
            <p className="mb-5 text-white">
              please support to our organization to make the better world for
              tommorow's future
            </p>

            <button className=" m-2 w-40 sm:w-full h-10 text-white capitalize font-semibold text-lg bg-gradient-to-r from-orange-400 to-pink-500 hover:bg-yellow-600">
            <NavLink to="/Donate">Donate</NavLink>
            </button>
            <button className="m-2 w-40 sm:w-full h-10 text-white capitalize font-semibold text-lg bg-gradient-to-r from-orange-400 to-pink-500 hover:bg-yellow-600">
            <NavLink to="/Contact"> Join with us</NavLink>
            </button>
            {/* </form> */}
          </div>
          
        </div>
      </div>
    </div>

    <div className="sm:w-[100%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[100%]  w-full flex justify-center items-center mt-3">
      <p className="text-white p-4 text-left text-xs">@eaglecryptoclub2022</p>
      <p className="text-white  text-right text-xs">All rights reserved</p>
    </div>
  </div>
  </div>
);

export default Footer;
