import React, { useState } from "react";
import { useMovieContext } from "../context/MovieContext";

const Formulario = () => {
  const { dispatch } = useMovieContext();
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");

  const generarId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    dispatch({
      type: "ADD",
      payload: {
        id: generarId(),
        titulo,
        descripcion,
        genero,
        favorito: false
      },
    });
    setTitulo("");
    setDescripcion("");
    setGenero("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre de la película"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Género"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
};

export default Formulario;