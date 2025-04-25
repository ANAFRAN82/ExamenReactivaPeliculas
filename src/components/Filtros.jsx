import React, { useState } from "react";
import { useMovieContext } from "../context/MovieContext.jsx";

const Filtros = () => {
  const { state } = useMovieContext();
  const [busqueda, setBusqueda] = useState("");

  const filtradas = state.filter((p) =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="mb-4">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Buscar película..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      {busqueda && (
        <ul className="mt-2 space-y-1">
          {filtradas.map((p) => (
            <li key={p.id} className="text-gray-700">
              {p.titulo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filtros;