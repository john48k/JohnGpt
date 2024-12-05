import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("Jesse");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>JOHN GPT</h1>
        <h2>Enhance creativity and optimize productivity.</h2>
        <h3>
          JohnGPT empowers innovation by transforming ideas into actionable
          insights. It streamlines workflows, enhancing both creativity and
          efficiency.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "Jesse"
                  ? "/Jesse.png"
                  : typingStatus === "Walter"
                  ? "/Walter.png"
                  : typingStatus === "Saul"
                  ? "/Saul.jpg"
                  : typingStatus === "Gus"
                  ? "/Gus.png"
                  : "/Jesse.png" // Fallback image
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Jesse: Yo, how does this chemical reaction even work?",
                3000,
                () => {
                  setTypingStatus("Walter");
                },
                "Walter: How do you achieve a 99% purity rate?",
                3000,
                () => {
                  setTypingStatus("Saul");
                },
                "Saul: Can you explain it like I'm talking to a jury?",
                3000,
                () => {
                  setTypingStatus("Gus");
                },
                "Gus: How many Los Pollos Hermanos are there??",
                3000,
                () => {
                  setTypingStatus("Jesse");
                },
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
