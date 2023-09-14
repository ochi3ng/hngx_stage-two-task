import React, { useState } from 'react';
import axios from 'axios';
import SearchingBar from '../components/SearchingBar';
import './SearchResults.css';


function SearchResults() {
    
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [search, setSearch]=useState(false)

    const handleSearch = async (searchQuery) => {
        try {
            setSearch(false)
            setLoading(true);
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie`,
                {
                    params: {
                        api_key: '15e44a544141d7c1a63d83c696a3d8c9',
                        query: searchQuery,
                    },
                }
            );

            setMovies(response.data.results);
            setSearch(true)
        } catch (error) {
            console.error('Error searching for movies:', error);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div>
            <SearchingBar onSearch={handleSearch} />
            {loading && <p className="loading-indicator">Loading...</p>}

            {!loading && search === true && movies.length === 0 && <p className="no-results">Sorry! No results found.</p>}
            <div className="movie-container">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <h2>{movie.title}</h2>
                        <p>Release Date: {movie.release_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchResults;