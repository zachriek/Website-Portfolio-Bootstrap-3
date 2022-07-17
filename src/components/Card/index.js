// React
import React from 'react';
import propTypes from 'prop-types';

// CSS
import './index.css';
import Button from '../Button';

const Card = ({ title, text, image, subtitle, link }) => {
    return (
        <div className="card">
            {image && (
                <div className="card-image">
                    <img src={image} alt="card-img" />
                </div>
            )}
            <div className="card-body">
                {title && <h5 className="card-title">{title}</h5>}
                {subtitle && <h5 className="card-subtitle">{subtitle}</h5>}
                {text && <p className="card-text">{text}</p>}
                {link && (
                    <Button isSecondary isAnchor isExternal href={link}>
                        Show
                    </Button>
                )}
            </div>
        </div>
    );
};

Card.propTypes = {
    title: propTypes.string,
    text: propTypes.string,
    subtitle: propTypes.string,
    link: propTypes.string,
};

export default Card;
