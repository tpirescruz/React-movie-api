import React, { useEffect, useState } from 'react';
import './SearchResults.css';
import {key} from '../API_keys';
import Card from '../Card/Card'


const SearchResults = (props) => {
    const {searchQuery} = props
    const [searchResults, setSearchResults]= useState([])
    const getSearchResults = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchQuery}`)
        .then(resp => resp.json())
        .then(data => setSearchResults(data))
    }
    console.log(searchResults)

    useEffect(() => getSearchResults(),[searchQuery, key]);
    return (
        <div className='search-results'>
            <h2>Search results for: <span>{searchQuery}</span></h2>
        <div className='movie-section'>
            {searchResults ?? searchResults.map((item, index) =>(
                <Card 
                    key={index}
                    title={item.original_title}
                    img={item.poster_path}
                    data={item}
                    year={item.release_date}


                />
            ))}
        </div>
        </div>
    );
};

export default SearchResults;