import React from 'react';
import { RiFacebookFill, RiInstagramLine, RiTwitterFill, RiYoutubeFill, RiPinterestLine } from 'react-icons/ri';


const Footer = () => {
  return (
    <footer id="contact">
      <div className="section__container footer__container">
        <div className="footer__col">
          <img src="/assets/RadientWhite.png" alt="logo" />
          <div className="footer__socials">
            <a href="#"><RiFacebookFill /></a>
            <a href="#"><RiInstagramLine /></a>
            <a href="#"><RiTwitterFill /></a>
            <a href="#"><RiYoutubeFill /></a>
            <a href="#"><RiPinterestLine /></a>
          </div>
        </div>
        <div className="footer__col">
          <ul className="footer__links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#service">SERVICES</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>STAY IN TOUCH</h4>
          <p>
            Keep up-to-date with all things Capturer! Join our community and
            never miss a moment!
          </p>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2024 Mduduzi Ndlovu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
