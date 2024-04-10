import React, { useState, useEffect } from "react";
import { useScramble } from "use-scramble";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Faq from "react-faq-component";
import Creed1 from "../assets/Creed1.png";
import Creed2 from "../assets/Creed2.png";
import Creed3 from "../assets/Creed3.png";
import Pfp1 from "../assets/examplenft.png";
import CityBackground from "../assets/background5.png";

const Home = () => {

  // ===== Scramble Text =====

  const texts = ["Innovative Products", "Gamified Systems", "An Elite Community"];
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
  
  // ===== FAQ =====

  const data = {
    rows: [
      {
        title: <h1 className="text-4xl font-anton pb-2">Who are the Sui Snails?</h1>,
        content: <p className="text-3xl pb-8">{`Sui Snails are a collection of randomly generated NFTs that have been 
        tasked with the mission to develop and expand Shell City, a newly founded metropolis 
        on the Sui Blockchain.`}</p>,
      },
      {
        title: <h1 className="text-4xl font-anton pb-2">What is the mission of this project?</h1>,
        content:
          <p className="text-3xl pb-10">{`Sui Snails seek to build a booming metropolis that fundamentally shifts the nature of work from one 
          that is tied up in corporate bureaucracy to one that is truly transparent and fairly rewarded.
          Residents of Shell City will share in the prosperity of the economy as a whole.`}</p>,
      },
      {
        title: <h1 className="text-4xl font-anton pb-2">Who is the team behind Sui Snails?</h1>,
        content: <p className="text-3xl pb-4">{`A small-time developer with big dreams and a content creator who just wants to degen.`}</p>,
      },
      {
        title: <h1 className="text-4xl font-anton pb-2">Wen mint?</h1>,
        content: <p className="text-3xl pb-4">{`Date TBD`}</p>,
      }
    ],
  };
  
  const styles = {
    bgColor: 'transparent',
    rowTitleColor: 'white',
    rowTitleTextSize: 'xx-large',
    rowContentColor: 'white',
    rowContentTextSize: 'larger',
    arrowColor: "white",
  };
  
  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
 
  return (
    <div className={`home flex flex-col w-full h-full text-white bg-darkblue bg-cover font-anton`}>
      <Navbar />
      <img src={CityBackground} alt="background" className="absolute z-0" style={{minHeight: "600px", minWidth: "900px", position: "center"}}></img>
      <div className="popup-bg absolute w-full bg-black bg-cover opacity-50 z-10" style={{minHeight: "600px"}}></div>
      <div className="header-container overflow-hidden w-full flex flex-col justify-center items-center z-20">
        <div className="header-text w-full ml-32 mt-8 text-8xl">
          <h1 className="drop-shadow">We're Building</h1>
          <h1 className="gradient-text drop-shadow bg-gradient-to-r from-gradientblue1 to-gradientblue2 inline-block text-transparent bg-clip-text" ref={ref}>
            ''
          </h1>
          <h1 className="drop-shadow">In Shell City.</h1>
          <div className="buttons pt-7 flex text-5xl">
            <button className="home-button1 drop-shadow relative mr-4 h-3/4 py-1 px-4 bg-ssblue text-black cursor-pointer rounded-xl border-ssblue border-2 ease-in-out duration-300 hover:bg-darkblue hover:text-white">Join Us</button>
            <button className="home-button2 drop-shadow relative h-3/4 py-1 px-4 bg-transparent text-white cursor-pointer rounded-xl border-ssblue border-2 ease-in-out duration-300 hover:bg-ssblue">Learn More</button>
          </div>
        </div>
      </div>
      <div className="content-container w-full p-16 text-left justify-between left-0 right-0 z-20 mt-40">
        <h1 className="text-6xl">
          The SUI<span className="text-ssblue">SNAILS</span>{" "}Creed
        </h1>
        <div
          className="content-item w-full flex items-center border-t-2 border-fadedwhite border-solid"
        >
          <img src={Creed1} alt="one" className='max-w-72 h-full mr-8'></img>
          <div className="content-text h-full flex flex-col">
          <h1 className="text-5xl mb-4">Live Long and Prosper</h1>
            <p className="text-3xl font-sans font-light">
              All Sui{' '}
              <span className='text-ssblue'>
                Snails
              </span>{" "}
              are entitled to the prosperity of Shell City, but only those with
              {" "}<span className="text-ssblue">full HP</span>{" "}
              will get their full share. All citizens start at
              {" "}<span className="text-ssblue">100 HP.</span>
            </p>
          </div>
        </div>
        <div className="content-item w-full flex items-center">
          <div className="content-text flex flex-col justify-left">
            <h1 className="text-5xl mb-4">HODL Onto Your Shell</h1>
            <p className="text-3xl font-sans font-light">
              Abandoning your shell means death! Keep on back at all times.
              Sell or trade at your own risk.{" "}
              <span className="text-ssblue">
                Taking off shell
              </span>{" "}
              ={" "}
              <span className="text-ssblue">
                -1 HP.
              </span>
            </p>
          </div>
          <img src={Creed2} alt="two" className='max-w-72 h-full ml-8'></img>
        </div>
        <div className="content-item w-full flex items-center">
          <img src={Creed3} alt="two" className='max-w-72 h-full mr-8'></img>
          <div className="content-text flex flex-col justify-left">
            <h1 className="text-5xl mb-4">Enjoy Life in Shell City</h1>
            <p className="text-3xl font-sans font-light">
              A vast number of ameneties will become available in the city over
              time, from devless tools to roguelite games and more. We are always
              developing new districts and will not stop until Shell City is the
              {" "}<span className="text-ssblue">
                Greatest Metropolis in the Big Blue Sui.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div
        className="content-container p-16 bg-black bg-cover"
      >
        <h1 className="text-6xl mb-4">
          SHELL<span className="text-ssblue">MAKERS</span>
        </h1>
        <div className="content-item w-full flex items-center justify-evenly">
          <img src={Pfp1} alt="pfp-melon" className='max-w-60 h-full'></img>
          <div className="content-text flex flex-col justify-left ml-8">
            <h1 className="text-5xl pb-4">Melon.dev</h1>
            <p className="text-3xl font-sans">
              Sleeps with one eye taped open.
            </p>
          </div>
          <img src={Pfp1} alt="pfp-melon" className='max-w-60 h-full ml-16'></img>
          <div className="content-text flex flex-col justify-left ml-8">
            <h1 className="text-5xl pb-4">SL</h1>
            <p className="text-3xl font-sans">
              Content creator by day, degen by night.
            </p>
          </div>
        </div>
      </div>
      <div className="content-container p-16">
        <h1 className="text-6xl text-white mb-8">
          F<span className="text-ssblue">A</span>Q
        </h1>
        <div className="faq-section w-full font-sans">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
