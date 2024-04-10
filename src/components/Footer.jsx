import React from "react";
import Logo from "../assets/logo.png";
import { Tooltip } from "react-tooltip";

const Footer = () => {
  return (
    <div className="footer bg-black bg-cover text-white bottom-0 flex flex-col px-16">
      <div className="footer-content flex items-left justify-between">
        <div className="footer-logo pt-8 flex items-top justify-start">
          <img src={Logo} alt="logo" style={{ width: "40px", height: "40px" }}></img>
          <h1 style={{paddingLeft: "1rem", marginTop: "-0.2rem"}}>
            <span style={{ color: "white", fontSize: "2rem" }}>SUI</span>
            <span style={{ color: "#0AAEFF", fontSize: "2rem" }}>SNAILS</span>
          </h1>
        </div>
        <div className="footer-links-container pt-8 flex pb-20">
          <div className="footer-links-item flex flex-col mr-16 items-left">
            <h1 className='text-2xl'>Resources</h1>
            <p 
              className='text-base opacity-70 pt-4'
              data-tooltip-id="whitepaper"
              data-tooltip-content="Coming Soon"
            >
              Whitepaper v0.1
            </p>
            <p 
              className='text-base opacity-70'
              data-tooltip-id="terms-of-use"
              data-tooltip-content="Coming Soon"
            >
              Terms of Use
            </p>
            <p 
              className='text-base opacity-70'
              data-tooltip-id="disclaimer"
              data-tooltip-content="Coming Soon"
            >
              Disclaimer
            </p>
            <Tooltip id="whitepaper" className='text-3xl'/>
            <Tooltip id="terms-of-use" className='text-3xl'/>
            <Tooltip id="disclaimer" className='text-3xl'/>
          </div>
          <div className="footer-links-item flex flex-col mr-16 items-left">
            <h1 className='text-2xl'>Social Media</h1>
            <a
              href="https://twitter.com/suisnails"
              target="_blank"
              rel="noopener noreferrer"
              className='text-base opacity-70 pt-4 hover:opacity-100 ease-in-out duration-300'
            >
              Twitter
            </a>
            <a
              href="https://discord.gg/4RjEjQ5AcG"
              target="_blank"
              rel="noopener noreferrer"
              className='text-base opacity-70 hover:opacity-100 ease-in-out duration-300'
            >
              Discord
            </a>
          </div>
          <div className="footer-links-item flex flex-col items-left">
            <h1 className='text-2xl'>Contact</h1>
            <p className='text-base opacity-70 pt-4'>suisnailsnft@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="copyright text-left border-t-2 border-solid border-fadedwhite pb-4">
        <p className='text-base opacity-70'>
          &copy; 2024 Sui Snails. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
