import React, { useState } from 'react';
import './Searchbar.css';
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';

const SearchBar = (props) => {
    const {onBtnClick} = props 
    const [inputValue, setInputValue] = useState('')
    return (
        <div className='navbar'>
            <Link to='/'>
                <h1><span><i className='bi bi-camera-reels'></i></span> Movie<span>Db</span></h1>
            </Link>
            <div>
                <input type="text" value={inputValue}  onChange={(e) => setInputValue(e.target.value)}/>
                <Link to='/search'>
                    <Button type='searchbar-btn' icon='search' onBtnClick={() => onBtnClick(inputValue)}/>
                </Link>
                
            </div>
            
        </div>
    );
};

export default SearchBar;