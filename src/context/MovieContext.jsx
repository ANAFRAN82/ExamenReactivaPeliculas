import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useMoviesReducer } from "../hooks/useMoviesReducer";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useMoviesReducer();

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);