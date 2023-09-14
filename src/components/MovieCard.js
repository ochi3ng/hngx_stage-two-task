import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie }) {
    const {id}=movie
    return (
        <div className="movie-card" data-testid="movie-card">
            <img
                className="image"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                data-testid="movie-poster"
            />
            
            <Link to={`/movies/${id}`}>
                <h2 data-testid="movie-title" className="movie-title">
                    {movie.title}
                </h2>
            </Link>
            
           <div className='addtofavorites'>
                <p data-testid="movie-release-date" className="movie-release-date">
                    {movie.release_date}
                </p>
                <img className='addTofav' src='https://cdn-icons-png.flaticon.com/128/3551/3551662.png' alt='favorite' />
           </div>
        </div>
    );
}

export default MovieCard;






