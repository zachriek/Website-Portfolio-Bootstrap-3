import React from 'react';
import './index.css';
import Brand from '../Brand';
import SocialMedia from '../SocialMedia';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-brand">
          <Brand />
        </div>
        <div className="footer-copyright">
          <p className="text">Copyright 2022 | zachrie &mdash; k</p>
        </div>
        <div className="footer-links">
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
