import React from "react";
import { useMovieContext } from "../context/MovieContext";

const Favoritos = () => {
  const { state } = useMovieContext();
  const favoritos = state.filter((p) => p.favorito);

  if (favoritos.length === 0) return null;

  return (
    <div className="mt-4">
      <h2 className="h4 mb-3">Favoritos</h2>
      <ul className="list-group">
        {favoritos.map((pelicula) => (
          <li key={pelicula.id} className="list-group-item">
            <h5>{pelicula.titulo}</h5>
            <p className="mb-1">{pelicula.descripcion}</p>
            <small className="text-muted">Género: {pelicula.genero}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favoritos;