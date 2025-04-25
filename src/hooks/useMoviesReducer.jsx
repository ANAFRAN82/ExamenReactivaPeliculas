import { useReducer, useEffect } from "react";

const initialState = JSON.parse(localStorage.getItem("peliculas")) || [];

const movieReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "UPDATE":
      return state.map((movie) =>
        movie.id === action.payload.id ? action.payload : movie
      );
    case "DELETE":
      return state.filter((movie) => movie.id !== action.payload);
    case "TOGGLE_FAVORITE":
      return state.map((movie) =>
        movie.id === action.payload
          ? { ...movie, favorito: !movie.favorito }
          : movie
      );
    default:
      return state;
  }
};

export const useMoviesReducer = () => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
};