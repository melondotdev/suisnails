import React from "react";
import Logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="logo" style={{ width: "40px", height: "40px" }}></img>
          <h1 style={{paddingLeft: "1rem", marginTop: "-0.2rem"}}>
            <span style={{ color: "white", fontSize: "2rem" }}>SUI</span>
            <span style={{ color: "#0AAEFF", fontSize: "2rem" }}>SNAILS</span>
          </h1>
        </div>
        <div className="footer-links-container">
          <div className="footer-links-item">
            <h1 style={{fontSize:'1.5rem'}}>Resources</h1>
            <p style={{fontSize:'1rem', opacity: "70%"}}>Documentation</p>
            <p style={{fontSize:'1rem', opacity: "70%"}}>Terms of Use</p>
            <p style={{fontSize:'1rem', opacity: "70%"}}>Disclaimer</p>
          </div>
          <div className="footer-links-item">
            <h1 style={{fontSize:'1.5rem'}}>Social Media</h1>
            <p style={{fontSize:'1rem', opacity: "70%"}}>Twitter</p>
            <p style={{fontSize:'1rem', opacity: "70%"}}>Discord</p>
          </div>
          <div className="footer-links-item">
            <h1 style={{fontSize:'1.5rem'}}>Contact</h1>
            <p style={{fontSize:'1rem', opacity: "70%"}}>suisnailsnft@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p style={{ fontSize: "1rem" }}>
          &copy; 2024 Sui Snails. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
