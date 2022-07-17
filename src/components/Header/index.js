// React
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';

// Components
import Brand from '../Brand';

// CSS
import './index.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const stickyNavbar = () => {
        if (window.scrollY > 0) return setIsScrolled(true);
        return setIsScrolled(false);
    };

    const menuToggle = () => {
        document.body.classList.toggle('open');
        document.body.classList.toggle('stopScrolling');
    };

    const navLinkHandler = (e) => {
        if (document.body.classList.contains('open')) {
            document.body.classList.remove('open');
        }
        if (document.body.classList.contains('stopScrolling')) {
            document.body.classList.remove('stopScrolling');
        }
        document.querySelectorAll('.nav-link').forEach((link) => link.classList.remove('active'));
        e.target.classList.add('active');
    };

    useEffect(() => {
        stickyNavbar();

        window.addEventListener('scroll', () => {
            stickyNavbar();
        });
    }, []);

    return (
        <Fade top duration={1500}>
            <header className={isScrolled ? 'scrolled' : ''} id="header">
                <nav className="navbar container">
                    <Brand />
                    <div className="nav-menu">
                        <ul>
                            <li>
                                <a href="#home" className="nav-link active" onClick={navLinkHandler}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="nav-link" onClick={navLinkHandler}>
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="nav-link" onClick={navLinkHandler}>
                                    Projects
                                </a>
                            </li>
                        </ul>
                        <div className="nav-toggle" onClick={menuToggle}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </nav>
            </header>
        </Fade>
    );
};

export default Header;
