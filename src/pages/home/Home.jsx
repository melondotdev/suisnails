import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import BackgroundImage from "../../assets/background5.png";
import NeonSnail from "../../assets/neon-snail.png";
import "./Home.css";
import { useScramble } from "use-scramble";

const Home = () => {
  const texts = ["Infinite Potential", "Winner's Mindset", "Elite Community"];
  const [index, setIndex] = useState(0);
  
  const { ref, replay } = useScramble({
    text: texts[index],
    speed: 0.5,
    step: 1,
    delay: 0,
  });
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); 
    
    replay();

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [index, replay, texts.length]);
  
  return (
    <div className="home">
      <Navbar />
      <div className="header-container">
        <img src={BackgroundImage} alt="background" className="background" />
        <img src={NeonSnail} alt="neonsnail" className="neon-snail" />
        <div className="header-text">
          <h1 style={{fontWeight: "700"}}>Unlock Your</h1>
          <h1 className="gradient-text" style={{fontWeight: "700"}} ref={ref}>''</h1>
          <h1 style={{fontWeight: "700"}}>...With Snails?</h1>
          <div className="buttons">
            <button className="home-button" style={{backgroundColor: "#0AAEFF", color: "black", fontWeight: "500"}}>Launch App</button>
            <button className="home-button" style={{fontWeight: "500"}}>Documentation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
