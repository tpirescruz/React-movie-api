import React from 'react';
import './Card.css'

const Card = (props) => {
    const {title, data, img, year} = props
    const titleLength = title.length > 13 ? ' [...]' : ''
    
    return (
       <div className='card'>
            <img src={`https://image.tmdb.org/t/p/original${img}`} alt="" />
            <div className='card-content'>
                <h3>{title && title.substring(0 , 17) + titleLength}</h3>
                <p>{year && year.slice(0, -6)}</p>
            </div>
        </div>
    );
};

export default Card;