import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from './SideBar';
import './MovieDetails.css';

function MovieDetails() {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
console.log(id)
useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=15e44a544141d7c1a63d83c696a3d8c9`)
        .then((response) => response.json())
        .then((data) => {
           
            const movieDetails = {
                title: data.title,
                releaseDate: new Date(data.release_date).toUTCString(),
                runtime: data.runtime,
                overview: data.overview,
            };
            setMovie(movieDetails);
        })
        .catch((error) => console.error('Error fetching movie details:', error));
}, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container'>
            <div className='sidebar_container '>
                <SideBar />
            </div>
            <div className='details_container'>
                <h1 className="movie-title" data-testid="movie-title">{movie.title}</h1>
                <p className="movie-release-date" data-testid="movie-release-date">Release Date (UTC): {movie.releaseDate}</p>
                <p className="movie-runtime" data-testid="movie-runtime">Runtime (minutes): {movie.runtime}</p>
                <p className="movie-overview" data-testid="movie-overview">Overview: {movie.overview}</p>

            </div>
        </div>
    );
}

export default MovieDetails;