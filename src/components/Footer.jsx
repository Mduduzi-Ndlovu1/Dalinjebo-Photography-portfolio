import React from 'react';
import { RiFacebookFill, RiInstagramLine, RiTwitterFill, RiYoutubeFill, RiPinterestLine, RiLinkedinFill, RiMailAddFill } from 'react-icons/ri';


const Footer = () => {
  return (
    <footer id="contact">
      <div className="section__container footer__container">
        <div className="footer__col">
          <img src="/assets/RadientWhite.png" alt="logo" />
          <div className="footer__socials">
            <a href="https://m.facebook.com/dali.ngene/"><RiFacebookFill /></a>
            <a href="https://www.instagram.com/dalindyebo_/"><RiInstagramLine /></a>
            <a href="https://za.linkedin.com/in/dalindyebo-ngene-442541203"><RiLinkedinFill /></a>
            <a href="Dalingenedp@gmail.com"><RiMailAddFill /></a>
            
          </div>
        </div>
        <div className="footer__col">
          <ul className="footer__links">
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT US</a></li>
            <li><a href="/services">SERVICES</a></li>
            <li><a href="/portfolio">PORTFOLIO</a></li>
            <li><a href="./contact">CONTACT US</a></li>
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
