import React from 'react';
import { Fade } from 'react-reveal';
import Button from '../Button';
import { HeroIMG } from '../../assets/images';
import './index.css';

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <Fade bottom duration={1500} delay={600}>
          <div className="hero-info">
            <h1>
              Zachrie <span>Kurniawan</span>
            </h1>
            <h4 className="sub-heading">
              <span>-</span> Web Developer
            </h4>
            <p className="text">An ordinary person who likes to create web applications and learn new technologies</p>
            <div className="cta">
              <Button isPrimary isAnchor isExternal href="https://api.whatsapp.com/send?phone=6281274786920">
                Contact Me
              </Button>
              <Button isSecondary isAnchor isExternal href="mailto:zachrie2005@gmail.com">
                Email Me
              </Button>
            </div>
          </div>
        </Fade>
        <Fade top duration={1500} delay={1000}>
          <div className="hero-image">
            <img src={HeroIMG} alt="hero" />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
