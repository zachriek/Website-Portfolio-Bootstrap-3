import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Fade } from 'react-reveal';
import Card from '../Card';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css';

const Projects = ({ projectsData }) => {
  const [slidesPerView, setSlidesPerView] = useState('');

  const changeSlidesPerView = () => {
    if (window.innerWidth <= 576) {
      setSlidesPerView(1);
    } else if (window.innerWidth > 576 && window.innerWidth < 768) {
      setSlidesPerView(2);
    } else if (window.innerWidth >= 768) {
      setSlidesPerView(3);
    }
  };

  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener('resize', changeSlidesPerView);
  }, []);

  return (
    <section id="projects">
      <div className="container">
        <Fade top duration={1500} delay={600}>
          <div className="projects-info">
            <h2 className="heading">My Projects</h2>
            <h4 className="sub-heading">
              <span>-</span> Latest works <span>-</span>
            </h4>
          </div>
        </Fade>
        <Fade bottom duration={1500} delay={1000}>
          <Swiper modules={[Pagination]} slidesPerView={slidesPerView} spaceBetween={50} pagination={{ clickable: true }}>
            {projectsData.map((project, index) => (
              <SwiperSlide key={index}>
                <Card title={project.name} subtitle={project.tech} text={project.description} image={project.image} link={project.link} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>
      </div>
    </section>
  );
};

export default Projects;
