import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link, useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
// import * as LuIcons from "react-icons/lu";
import * as IoIcons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

const Navbar = () => {
  const location = useLocation();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="navbar flex justify-between items-center h-24 font-anton z-50 mt-3 text-3xl relative">
      <div className="navbar-left h-full flex justify-start items-center top-0 bottom-0 pt-1">
        <Link to="/" className="navbar-logo drop-shadow-md mx-8">
          SUI<span className='text-ssblue'>SNAILS</span>
        </Link>
      </div>
      <div className="navbar-right h-full flex justify-start items-center top-0 bottom-0 pt-1">
        <Link to="#" className={`menu-bars ${sidebar ? "opacity-0" : "opacity-100"} mx-8 bg-transparent hover:text-ssblue ease-in-out duration-300`}>
          <FaIcons.FaBars onClick={showSidebar} className="drop-shadow-md" />
        </Link>
      </div>
      <div className={`nav-menu bg-darkblue w-20 h-full fixed flex flex-col justify-between items-center top-0 pt-8 ${sidebar ? "right-0 duration-300" : "-right-full duration-300"}`}>
        <div className="nav-menu-top flex flex-col items-center">
          <Link
            to="#"
            className="nav-menu-item w-full p-4 ease-in-out duration-300 hover:text-ssblue"
            onClick={showSidebar}
          >
            <AiIcons.AiOutlineClose />
          </Link>
          <Link
            to="/"
            className="nav-menu-item w-full p-4 ease-in-out duration-300 hover:text-ssblue"
            style={{ color: location.pathname === "/" ? "#0AAEFF" : "" }}
            data-tooltip-id="home"
            data-tooltip-content="Home"
          >
            <IoIcons.IoHomeOutline />
          </Link>
          {/* <Link
            to="about"
            className="nav-menu-item w-full p-4 ease-in-out duration-300 hover:text-ssblue"
            style={{
              color: location.pathname === "/about" ? "#0AAEFF" : "",
            }}
            data-tooltip-id="about"
            data-tooltip-content="About Us"
          >
            <FaIcons.FaRegQuestionCircle />
          </Link>
          <Link
            to="/lore"
            className="nav-menu-item w-full p-4 ease-in-out duration-300 hover:text-ssblue"
            style={{
              color: location.pathname === "/lore" ? "#0AAEFF" : "",
            }}
            data-tooltip-id="lore"
            data-tooltip-content="Shell City"
          >
            <LuIcons.LuBookOpen />
          </Link> */}
          <a
            href="https://lancer.suisnails.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-menu-item w-full p-4 ease-in-out duration-300 hover:text-ssblue"
            data-tooltip-id="lancer"
            data-tooltip-content="Lancer"
          >
            <BsIcons.BsSuitcaseLg />
          </a>
        </div>
        <div className="nav-menu-bottom flex flex-col items-center mb-8">
          <a
            href="https://twitter.com/suisnails"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-menu-item w-full p-4 ease-in-out duration-300 hover:text-ssblue"
          >
            <RiIcons.RiTwitterXLine />
          </a>
          <a
            href="https://discord.gg/4RjEjQ5AcG"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-menu-item w-full p-4 ease-in-out duration-300 hover:text-ssblue"
          >
            <RiIcons.RiDiscordLine />
          </a>
        </div>
        <Tooltip id="home" className='text-3xl'/>
        <Tooltip id="about" className='text-3xl'/>
        <Tooltip id="lore" className='text-3xl'/>
        <Tooltip id="lancer" className='text-3xl'/>
      </div>
    </div>
  );
};

export default Navbar;