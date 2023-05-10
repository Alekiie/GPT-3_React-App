import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination.
        </h1>
        <p>
          ChatGPT can provide a wide range of services, including answering
          questions, generating text, providing recommendations, and offering
          insights. Its possibilities are virtually limitless and constantly
          expanding through ongoing training and development.
        </p>
        <h4>Try it for a guaranteed satisfaction.</h4>
      </div>
    </div>
  );
};

export default Possibility;
