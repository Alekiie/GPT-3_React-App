import React from "react";
import "./footer.css";
import imgLogo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others?
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={imgLogo} alt="logo" />
          <p>Entries@ Alekiee Kee </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Overons</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>MaskWood,USA, Matsac Building,8th Floor, Room D54</p>
          <p>+28679045632</p>
          <p>info@alentech.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>@2023 GPT-3. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
