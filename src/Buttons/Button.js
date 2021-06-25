import React from 'react';
import './Button.css';

const Button = (props) => {
    const {type, icon, text, onBtnClick} = props
    return (
        <button className={type} onClick={onBtnClick}>
            {icon && <i className={`bi bi-${icon}`}></i>}
            {text && {text}}
        </button>
    );
};

export default Button;