import React from 'react';
import logoMain from '../assets/mainLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer>
      <img src={logoMain} className="logo" alt="logo" />
      <div className="social-links">
        <a href="https://example.com" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://example.com" target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://example.com" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
      </div>
      <p>For Educational Purposes Only</p>
    </footer>
  );
};

export default Footer;
