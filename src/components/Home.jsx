import React from "react";
import { NavLink } from "react-router-dom";

import help from "../../images/handshake.webp";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen relative ">
        <img
          className="w-screen h-screen object-cover  justify-center items-center"
          src={help}
        />
        <div className="absolute w-screen h-full top-0 left-0 bg-gray-900/30"></div>
        <div className="absolute top-10 w-full h-full flex flex-col justify-center text-center text-white p-4">
          <h1 className="text-7xl sm:text-8xl  justify-center text-center font-extrabold capitalize ">
            helping to the world with your great heart
          </h1>
<br></br>
          <ul className="flex flex-col justify-center items-center">
            <li className="m-4 p-4 w-64 capitalize font-bold tracking-widest text-lg bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg cursor-pointer hover:bg-black animate-pulse">
              <NavLink to="/Contact">become a volunteer</NavLink>
            </li>
            <li className="m-4 p-4 w-64 capitalize font-bold tracking-widest text-lg bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg cursor-pointer hover:bg-red-500 animate-pulse hover:animate-bounce ">
              <NavLink to="/Donate">Donate</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
