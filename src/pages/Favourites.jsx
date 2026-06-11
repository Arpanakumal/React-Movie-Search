import React from 'react';
import '../css/Favourites.css';
import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

const Favourites = () => {
    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        return (
            <div>
                <h2>Your Favourites</h2>

                <div className="movie-grid">
                    {favorites.map(movie => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className='favorites-empty'>
            <h2>No Favourite Movies Yet</h2>
            <p>
                Start adding movies to your favourites and they will appear here.
            </p>
        </div>
    );
};

export default Favourites;