import './Footer.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import ncsu from '../../media/images/ncsu.png';

const Footer = () => {

  return (
    <div id="footer">

      <div id="seperator" style={{height: '1px', background: 'white'}}></div>
      
      <div id="footer-container"> 

        <div className="footer-text"> 
          <div id="footer-credits">
            {<img className="sponsor-logo" alt="NCSU" style={{borderRadius: '5px', margin: '0 0 10px 0'}} height="200%" src={ncsu} />}
          </div>
          <h2>ncsu.edu</h2>
        </div>

        <div className="footer-links" style={{display: window.innerWidth < 900 ? 'none' : 'flex'}}>
          <li><NavLink to="/about">About</NavLink></li>
        </div>

      
       

        <div className="footer-icons">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="fa fa-facebook"/> 
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="fa fa-facebook"/> 
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="fa fa-instagram"/> 
          </a>
        </div>

      </div>
    </div>
  );
}
 
export default Footer;