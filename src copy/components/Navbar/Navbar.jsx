import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { GiBread } from "react-icons/gi";
import {MdOutlineFavorite,MdRestaurantMenu,MdLocationOn,} from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          <span className="font-bold"> Migajitas</span>
        </h1>
        <div className="hidden lg:flex items-center rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Encuentranos</p>
        </div>
      </div>
      {/* Search input */}
      <div className="bg-gray-200 rounded-full flex items-center w-[200px] sm:w-[400px] lg:w-[500px] ">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Busqueda"
        ></input>
      </div>
      {/* Cart Button */}
      <button className=" bg-black text-white hidden md:flex items-center py-2 px-1 rounded-full">
        <GiBread size={20} className="mr-1" />
        Menú
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
        onClick={() =>setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          <span className="font-bold"> Migajitas</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <MdRestaurantMenu size={25} className="mr-4" />
              Menú
            </li>
            <li className="text-xl py-4 flex">
              <MdLocationOn size={25} className="mr-4" />
              Encuentranos
            </li>
            <li className="text-xl py-4 flex">
              <BsFillTelephoneFill size={25} className="mr-4" />
              Contactanos
            </li>
            <li className="text-xl py-4 flex">
              <MdOutlineFavorite size={25} className="mr-4" />
              Favoritos de la casa
            </li>
            <li className="text-xl py-4 flex">
              <FaSearch size={25} className="mr-4" />
              Acerca de nosotros
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
