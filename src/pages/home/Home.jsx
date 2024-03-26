import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import BackgroundImage from "../../assets/background5.png";
import NeonSnail from "../../assets/neon-snail.png";
import Creed1 from "../../assets/Creed1.png";
import Creed2 from "../../assets/Creed2.png";
import Creed3 from "../../assets/Creed3.png";
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
          <h1>Unlock Your</h1>
          <h1 className="gradient-text" ref={ref}>''</h1>
          <h1>...With Snails?</h1>
          <div className="buttons">
            <button className="home-button1">Launch App</button>
            <button className="home-button2">Documentation</button>
          </div>
        </div>
      </div>
      <div className="content-container" style={{paddingTop:"650px"}}>
        <h1>The <span style={{color: "white", fontSize: "3rem"}}>SUI</span><span style={{color: "#0AAEFF", fontSize: "3rem"}}>SNAILS</span> Creed</h1>
        <div className="content-item" style={{borderTop: "2px solid rgba(255, 255, 255, 0.5)"}}>
          <img src={Creed1} alt="one" style={{maxWidth: "15rem"}}></img>
          <div className="content-text">
            <h1 style={{paddingLeft: "2rem"}}>HODL Onto Your Shell</h1>
            <p style={{paddingLeft: "2rem", marginTop: "-1.5rem"}}>Abandoning your shell means death. Keep on back at all times. Absolutely NO selling or trading shells. <span style={{color: "#0AAEFF", fontSize: "1.5rem"}}>Take off shell</span> = <span style={{color: "#0AAEFF", fontSize: "1.5rem"}}>-1 HP.</span></p>
          </div>
        </div>
        <div className="content-item">
          <div className="content-text">
            <h1 style={{paddingLeft: "2rem"}}>Live Long and Prosper</h1>
            <p style={{paddingLeft: "2rem", marginTop: "-1.5rem"}}>All <span style={{color: "white", fontSize: "1.5rem"}}>SUI</span><span style={{color: "#0AAEFF", fontSize: "1.5rem"}}>SNAILS</span> are entitled to a share of the <span style={{color: "white", fontSize: "1.5rem"}}>WHIRL</span><span style={{color: "#0AAEFF", fontSize: "1.5rem"}}>POOL</span>, but only those with full HP will get their full share.</p>
          </div>
          <img src={Creed2} alt="two" style={{maxWidth: "15rem"}}></img>
        </div>
        <div className="content-item">
          <img src={Creed3} alt="two" style={{maxWidth: "15rem"}}></img>
          <div className="content-text">
            <h1 style={{paddingLeft: "2rem"}}>Enjoy Life in Shell City</h1>
            <p style={{paddingLeft: "2rem", marginTop: "-1.5rem"}}>A vast number of ameneties will become available in the city over time, from DeFi protocols to dev tools to roguelite games.</p>
          </div>
        </div>
      </div>
      <div className="content-container" style={{paddingTop:"100px"}}>
        <h1><span style={{color: "white", fontSize: "3rem"}}>SHELL</span><span style={{color: "#0AAEFF", fontSize: "3rem"}}>MAKERS</span></h1>
      </div>
    </div>
  );
};

export default Home;
