import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          AI, short for Artificial Intelligence, refers to the field of computer
          science and engineering that focuses on creating machines that can
          perform tasks that typically require human intelligence, such as
          visual perception, speech recognition, decision-making, and natural
          language processing.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" name="" id="" placeholder="Your Email" />
          <button type="email">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  );
};

export default Header;
