import React, { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => {
    return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([]);

    const STORAGE_KEY = "favorites";

    useEffect(() => {
        const storedFavs = localStorage.getItem(STORAGE_KEY);

        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    }, [favorites]);



    const addToFavourites = (movie) => {
        console.log("Adding:", movie.title);

        setFavorites(prev => [...prev, movie]);
    }
    useEffect(() => {
        console.log("Favorites:", favorites);
    }, [favorites]);
    

    const removeFromFavourites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavourite = (movieId) => {
        return favorites.some(movie => movie.id === movieId
        )
    }

    const values = {
        favorites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
    }


    return (
        <MovieContext.Provider value={values}>
            {children}
        </MovieContext.Provider>
    );
};