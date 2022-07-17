// React
import React from 'react';
import { Github, Youtube, Instagram } from 'react-bootstrap-icons';

// CSS
import './index.css';

const SocialMedia = () => {
    return (
        <div className="social-media">
            <a className="social-media-icon" href="#github">
                <Github />
            </a>
            <a className="social-media-icon" href="#youtube">
                <Youtube />
            </a>
            <a className="social-media-icon" href="#instagram">
                <Instagram />
            </a>
        </div>
    );
};

export default SocialMedia;
