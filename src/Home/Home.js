import React, { useEffect, useState} from 'react';
import {key} from '../API_keys';
import Card from '../Card/Card';
import Hero from '../Hero/Hero';


const Home = () => {
    const [popMoviesData, setPopMoviesData] = useState([])
    const [popShowsData, setPopShowsData] = useState([])
    const popMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}&page=1`)
        .then(res => res.json())
        .then( response => setPopMoviesData(response.results))
    }
    const popShows = () => {
        fetch(`https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=${key}&page=1`)
        .then(res => res.json())
        .then( response => setPopShowsData(response.results))
    }
    useEffect(() => popMovies(), []);
    useEffect(() => popShows(), []);
    return (
        <>{ popShowsData[0] &&
        <Hero
            backdrop={popShowsData[0].backdrop_path}
            title={popShowsData[0].original_name}
            summary={popShowsData[0].overview}
            score={popShowsData[0].vote_average}
        />}
        <main>
        <h2>Trending Movies</h2>
        <div className='movie-section'>
            {popMoviesData === undefined? <p>LOADING</p> :  popMoviesData.slice(0, -8).map((item, index) =>(
                <Card 
                    key={index}
                    title={item.original_title}
                    img={item.poster_path}
                    data={item}
                    year={item.release_date}


                />
            ))}
        </div>
        <h2>Trending TV Shows</h2>
        <div className='movie-section'>
            {popShowsData && popShowsData.slice(0, -8).map((item, index) =>(
                <Card 
                    key={index}
                    title={item.original_name}
                    img={item.poster_path}
                    data={item}
                    year={item.first_air_date}

                />
            ))}
        </div>
     
        </main>
        </>
    );
};

export default Home;