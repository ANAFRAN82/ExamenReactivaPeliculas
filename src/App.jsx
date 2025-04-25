import React from "react";
import { MovieProvider } from "./context/MovieContext";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import Favoritos from "./components/Favoritos";
import Filtros from "./components/Filtros";

export default function App() {
  return (
    <MovieProvider>
      <div className="container py-4">
        <h1 className="text-center mb-4">API Películas</h1>
        <Formulario />
        <Filtros />
        <Lista />
        <Favoritos />
      </div>
    </MovieProvider>
  );
}