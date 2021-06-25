import React from 'react';
import './Hero.css'

const Hero = (props) => {
    const {title, score, summary, backdrop} = props
    return (
        <header style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop})`}}>
            <div className='header'>
                <h3>{title}</h3>
                <p>{summary}</p>
                <div>
                    <i className='bi bi-star-fill'></i>
                    <p><span>{score}</span>/10</p>
                </div>
            </div>
        </header>
    );
};

export default Hero;