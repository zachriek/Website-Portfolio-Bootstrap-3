// React
import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Fade } from 'react-reveal';

// CSS
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css';

const Skills = ({ skillsData }) => {
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
        <section id="skills">
            <div className="container">
                <Fade top duration={1500} delay={600}>
                    <div className="skills-info">
                        <h2 className="heading">My Skills</h2>
                        <h4 className="sub-heading">
                            <span>-</span> Technologies i use <span>-</span>
                        </h4>
                    </div>
                </Fade>
                <Fade bottom duration={1500} delay={1000}>
                    <Swiper modules={[Pagination]} slidesPerView={slidesPerView} spaceBetween={50} pagination={{ clickable: true }}>
                        {skillsData.map((skill, index) => (
                            <SwiperSlide key={index}>
                                <img className="skill-img" src={skill.image} alt={skill.name} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Fade>
            </div>
        </section>
    );
};

export default Skills;
