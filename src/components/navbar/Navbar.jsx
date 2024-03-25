import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link, useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as LuIcons from "react-icons/lu";
import * as IoIcons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="#" className={sidebar ? "menu-bars active" : "menu-bars"}>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <Link to="/" className="navbar-logo">
          <span style={{color: "white", fontSize: "1.9rem"}}>SUI</span><span style={{color: "#0AAEFF", fontSize: "1.9rem"}}>SNAILS</span>
        </Link>
      </div>
      <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="nav-menu-top">
          <Link
            to="#"
            className="nav-menu-item"
            onClick={showSidebar}
            style={{ color: "white" }}
          >
            <AiIcons.AiOutlineClose />
          </Link>
          <Link
            to="/"
            className="nav-menu-item"
            style={{ color: location.pathname === "/" ? "#0AAEFF" : "white" }}
            data-tooltip-id="home"
            data-tooltip-content="SS Home"
          >
            <IoIcons.IoHomeOutline />
          </Link>
          <Link
            to="about"
            className="nav-menu-item"
            style={{
              color: location.pathname === "/about" ? "#0AAEFF" : "white",
            }}
            data-tooltip-id="about"
            data-tooltip-content="SS About"
          >
            <FaIcons.FaRegQuestionCircle />
          </Link>
          <Link
            to="/lore"
            className="nav-menu-item"
            style={{
              color: location.pathname === "/lore" ? "#0AAEFF" : "white",
            }}
            data-tooltip-id="lore"
            data-tooltip-content="SS Lore"
          >
            <LuIcons.LuBookOpen />
          </Link>
        </div>
        <div className="nav-menu-bottom">
          <a
            href="https://twitter.com/suisnails"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-menu-item"
            style={{ color: "white" }}
          >
            <RiIcons.RiTwitterXLine />
          </a>
          <a
            href="https://discord.gg/4RjEjQ5AcG"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-menu-item"
            style={{ color: "white" }}
          >
            <RiIcons.RiDiscordLine />
          </a>
        </div>
        <Tooltip id="home" style={{fontSize: "1.5rem", marginTop: "-17px"}}/>
        <Tooltip id="about" style={{fontSize: "1.5rem", marginTop: "-17px"}}/>
        <Tooltip id="lore" style={{fontSize: "1.5rem", marginTop: "-17px"}}/>
      </div>
      <div className="navbar-right">
        <button className="wallet-connect-button">Connect</button>
      </div>
    </div>
  );
};

export default Navbar;
