import React, { useState, useEffect } from "react";
import { useScramble } from "use-scramble";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Faq from "react-faq-component";
import "./Home.css";
import BackgroundImage from "../../assets/background5.png";
import NeonSnail from "../../assets/neon-snail.png";
import Creed1 from "../../assets/Creed1.png";
import Creed2 from "../../assets/Creed2.png";
import Creed3 from "../../assets/Creed3.png";
import Pfp1 from "../../assets/examplenft.png";

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

  const data = {
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "What is the package version",
        content: <p>current version is 1.2.1</p>,
      },
    ],
  };

  const styles = {
    bgColor: 'transparent',
    rowTitleColor: 'white',
    rowContentColor: 'white'
  };
  
  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

  return (
    <div className="home">
      <Navbar />
      <div className="header-container">
        <img src={BackgroundImage} alt="background" className="background" />
        <img src={NeonSnail} alt="neonsnail" className="neon-snail" />
        <div className="header-text">
          <h1>Unlock Your</h1>
          <h1 className="gradient-text" ref={ref}>
            ''
          </h1>
          <h1>...With Snails?</h1>
          <div className="buttons">
            <button className="home-button1">Launch App</button>
            <button className="home-button2">Documentation</button>
          </div>
        </div>
      </div>
      <div className="content-container" style={{ paddingTop: "650px" }}>
        <h1>
          The <span style={{ color: "white", fontSize: "3rem" }}>SUI</span>
          <span style={{ color: "#0AAEFF", fontSize: "3rem" }}>
            SNAILS
          </span>{" "}
          Creed
        </h1>
        <div
          className="content-item"
          style={{ borderTop: "2px solid rgba(255, 255, 255, 0.5)" }}
        >
          <img src={Creed1} alt="one" style={{ maxWidth: "15rem" }}></img>
          <div className="content-text">
            <h1 style={{ paddingLeft: "2rem" }}>HODL Onto Your Shell</h1>
            <p style={{ paddingLeft: "2rem", marginTop: "-1.5rem" }}>
              Abandoning your shell means death. Keep on back at all times.
              Absolutely NO selling or trading shells.{" "}
              <span style={{ color: "#0AAEFF", fontSize: "1.5rem" }}>
                Take off shell
              </span>{" "}
              ={" "}
              <span style={{ color: "#0AAEFF", fontSize: "1.5rem" }}>
                -1 HP.
              </span>
            </p>
          </div>
        </div>
        <div className="content-item">
          <div className="content-text">
            <h1 style={{ paddingLeft: "2rem" }}>Live Long and Prosper</h1>
            <p style={{ paddingLeft: "2rem", marginTop: "-1.5rem" }}>
              All{" "}
              <span style={{ color: "white", fontSize: "1.5rem" }}>SUI</span>
              <span style={{ color: "#0AAEFF", fontSize: "1.5rem" }}>
                SNAILS
              </span>{" "}
              are entitled to a share of the{" "}
              <span style={{ color: "white", fontSize: "1.5rem" }}>WHIRL</span>
              <span style={{ color: "#0AAEFF", fontSize: "1.5rem" }}>POOL</span>
              , but only those with full HP will get their full share.
            </p>
          </div>
          <img src={Creed2} alt="two" style={{ maxWidth: "15rem" }}></img>
        </div>
        <div className="content-item">
          <img src={Creed3} alt="two" style={{ maxWidth: "15rem" }}></img>
          <div className="content-text">
            <h1 style={{ paddingLeft: "2rem" }}>Enjoy Life in Shell City</h1>
            <p style={{ paddingLeft: "2rem", marginTop: "-1.5rem" }}>
              A vast number of ameneties will become available in the city over
              time, from devless tools to roguelite games and more.
            </p>
          </div>
        </div>
      </div>
      <div
        className="content-container"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          backgroundColor: "black",
        }}
      >
        <h1>
          <span style={{ color: "white", fontSize: "3rem" }}>SHELL</span>
          <span style={{ color: "#0AAEFF", fontSize: "3rem" }}>MAKERS</span>
        </h1>
        <div className="content-item">
          <img src={Pfp1} alt="pfp-melon" style={{ maxWidth: "15rem" }}></img>
          <div className="content-text">
            <h1 style={{ paddingLeft: "2rem" }}>Melon.dev</h1>
            <p style={{ paddingLeft: "2rem", marginTop: "-1.5rem" }}>
              Sleeps with one eye taped open.
            </p>
          </div>
          <img
            src={Pfp1}
            alt="pfp-melon"
            style={{ maxWidth: "15rem", paddingLeft: "2rem" }}
          ></img>
          <div className="content-text">
            <h1 style={{ paddingLeft: "2rem" }}>SL</h1>
            <p style={{ paddingLeft: "2rem", marginTop: "-1.5rem" }}>
              Content creator by day, degen by night.
            </p>
          </div>
        </div>
      </div>
      <div className="content-container" style={{ paddingBottom: "4rem" }}>
        <h1>
          <span style={{ color: "white", fontSize: "3rem" }}>F</span>
          <span style={{ color: "#0AAEFF", fontSize: "3rem" }}>A</span>
          <span style={{ color: "white", fontSize: "3rem" }}>Q</span>
        </h1>
        <div className="faq-section">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
