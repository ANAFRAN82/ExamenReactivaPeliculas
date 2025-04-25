import React from "react";
import { useMovieContext } from "../context/MovieContext";

const Lista = () => {
  const { state, dispatch } = useMovieContext();

  return (
    <div className="mb-4">
      <h2 className="h4 mb-3">Lista de Películas</h2>
      {state.length === 0 ? (
        <p>No hay películas registradas.</p>
      ) : (
        <ul className="list-group">
          {state.map((pelicula) => (
            <li key={pelicula.id} className="list-group-item d-flex justify-content-between align-items-start">
              <div>
                <h5>{pelicula.titulo}</h5>
                <p className="mb-1">Descripcion: {pelicula.descripcion}</p>
                <small className="text-muted">Género: {pelicula.genero}</small>
              </div>
              <div>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => dispatch({ type: "TOGGLE_FAVORITE", payload: pelicula.id })}
                >
                  {pelicula.favorito ? "★" : "☆"}
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => dispatch({ type: "DELETE", payload: pelicula.id })}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Lista;