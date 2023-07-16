import React from 'react';
import { Github, Youtube, Instagram } from 'react-bootstrap-icons';
import './index.css';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a className="social-media-icon" href="https://github.com/zachriek" target="_blank" rel="noreferrer">
        <Github />
      </a>
      <a className="social-media-icon" href="https://www.youtube.com/channel/UCFbzQWPGA17_gKzotx207jQ" target="_blank" rel="noreferrer">
        <Youtube />
      </a>
      <a className="social-media-icon" href="https://www.instagram.com/zachriek/" target="_blank" rel="noreferrer">
        <Instagram />
      </a>
    </div>
  );
};

export default SocialMedia;
